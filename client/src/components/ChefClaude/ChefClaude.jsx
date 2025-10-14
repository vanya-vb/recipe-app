import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import chefClaudeIcon from '/src/assets/chef-claude-icon.png';
import ClaudeRecipe from './ClaudeRecipe/ClaudeRecipe';
import Spinner from '../Spinner/Spinner';
import { HiPlus } from "react-icons/hi";
import { getRecipeFromChefClaude } from '../../api/ai';

export default function ChefClaude() {
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    async function getRecipe() {
        try {
            setLoading(true);
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
            setRecipe(recipeMarkdown);
        } catch (err) {
            console.log(err);
            toast.error(err);
        } finally {
            setLoading(false);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");

        if (validateInput(newIngredient)) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
            setIngredient("");
            inputRef.current?.focus();
        }
    }

    const ingredientRegex = /^(?=(?:.*[a-zA-Z]){3,})(?!.*([a-zA-Z])\1\1)[a-zA-Z\s,'-]+$/;

    function validateInput(value) {
        if (!value.trim()) {
            toast.error('Please enter an ingredient');
            return;
        }

        if (!ingredientRegex.test(value)) {
            toast.error('Invalid ingredient format');
            return;
        }

        return value;
    };

    return (
        <section className="flex-col min-h-screen px-6 pt-22 pb-15 lg:px-8 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url('/src/assets/ai-chef.jpg')] bg-no-repeat bg-top bg-cover">
            <div className="absolute inset-0 backdrop-blur-xs bg-black/10 px-6 pt-22 pb-15 overflow-y-auto">
                <header className='flex justify-center items-center gap-2 mt-4'>
                    <img src={chefClaudeIcon} className='w-13' alt="chef claude icon" />
                    <h1 className='font-semibold text-white text-2xl'>Chef Claude</h1>
                </header>

                {
                    loading ? (
                        <div className='flex justify-center items-center mt-20'>
                            <Spinner />
                        </div>
                    )
                        : (
                            recipe ?
                                (<ClaudeRecipe recipe={recipe} />)
                                :
                                (
                                    <>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="text-white flex flex-wrap sm:flex-nowrap justify-center gap-3 mt-8 w-full mx-auto"
                                        >
                                            <div className="flex flex-col flex-grow sm:flex-grow-0 sm:w-80 md:w-96">
                                                <input
                                                    type="text"
                                                    name="ingredient"
                                                    placeholder="e.g. oregano"
                                                    ref={inputRef}
                                                    aria-label="Add ingredient"
                                                    value={ingredient}
                                                    onChange={(e) => setIngredient(e.target.value)}
                                                    className="w-full rounded-md bg-white/15 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-tangerine/70 sm:text-sm/6"
                                                />
                                                <p className="text-gray-300 text-xs mt-1">
                                                    Please add at least 4 ingredients
                                                </p>
                                            </div>

                                            <button
                                                className="w-full flex items-center gap-1 sm:w-auto self-start rounded-md bg-tangerine px-4 py-2 text-sm font-semibold text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olivine-70 cursor-pointer hover:shadow-md hover:shadow-tangerine/50"
                                            >
                                                <HiPlus /> Add ingredient
                                            </button>
                                        </form>


                                        <div className="mt-12 mx-auto bg-gray-50 p-4 sm:p-6 rounded-md border-l-4 border-tangerine w-full max-w-3xl">
                                            <h2 className="text-gray-900 text-2xl font-semibold mb-4">
                                                Ingredients on hand:
                                            </h2>
                                            <ul
                                                className="list-disc list-inside space-y-1 text-gray-900"
                                                aria-live="polite"
                                            >
                                                {ingredients.length === 0 ? (
                                                    <p className='text-sm italic'>You have not added any ingredients yet.</p>
                                                )
                                                    : ingredientsListItems}
                                            </ul>

                                            <div className="mt-10 bg-olivine flex flex-wrap justify-between items-center gap-4 rounded-lg py-6 px-6 sm:px-10 self-stretch shadow-md">
                                                <div className="flex-1 min-w-[220px] text-left">
                                                    <h3 className="text-gray-950 text-xl mb-2 font-semibold">
                                                        Ready for a recipe?
                                                    </h3>
                                                    <p className="text-gray-900 text-sm md:text-md">
                                                        Generate a recipe from your list of ingredients.
                                                    </p>
                                                </div>

                                                <button
                                                    className="w-full md:max-w-[140px] rounded-md bg-gray-900 px-6 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olivine-70 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 hover:shadow-lg"
                                                    onClick={getRecipe}
                                                    disabled={ingredients.length < 4}
                                                >
                                                    Get a recipe
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )
                        )
                }
            </div>
        </section>
    );
};