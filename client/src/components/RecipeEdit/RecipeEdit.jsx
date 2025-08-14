import { useNavigate, useParams } from 'react-router'
import { useEditRecipe, useRecipe } from '../../api/recipeApi';

export default function RecipeEdit() {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const { recipe } = useRecipe(recipeId);
    const { edit } = useEditRecipe();

    // edit handler
    const formAction = async (formData) => {
        const recipeData = Object.fromEntries(formData);

        recipeData.ingredients = recipeData.ingredients.split(',').map(item => item.trim()).filter(item => item !== '');
        recipeData.instructions = recipeData.instructions.split('.').map(item => item.trim()).filter(item => item !== '');

        try {
            await edit(recipeId, recipeData);
            navigate(`/recipes/${recipeId}/details`);
            
        } catch (err) {
            console.error("Error editing recipe:", err);
        }
    };

    return (
        <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center py-30 px-4 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.60),rgba(0,0,0,0.30)),url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
            <form
                action={formAction}
                className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8"
            >
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Recipe</h1>

                <div className="space-y-4">

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter a recipe title..."
                            className="text-sm mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-tangerine/70 focus:border-tangerine/70"
                            defaultValue={recipe.title}
                        />
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                        <select
                            id="category"
                            name="category"
                            className=" text-sm mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-tangerine/70 focus:border-tangerine/70"
                            defaultValue={recipe.category}
                            required
                        >
                            <option value="" disabled>-- Choose a category --</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snacks">Snacks</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload a photo..."
                            className="text-sm mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-tangerine/70 focus:border-tangerine/70"
                            defaultValue={recipe.imageUrl}
                        />
                    </div>

                    <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-night">Ingredients:</label>
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            rows="2"
                            placeholder="Add the ingrediets, separated by comma"
                            className="text-sm mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-tangerine focus:border-tangerine"
                            defaultValue={recipe.ingredients}
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions:</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="4"
                            className="text-sm mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-tangerine/70 focus:border-tangerine/70"
                            defaultValue={recipe.instructions}
                        ></textarea>
                    </div>
                </div>

                <div className="mt-6">
                    <input
                        className="w-full bg-tangerine text-white font-semibold py-2 px-4 rounded-md hover:bg-tangerine/70 transition-colors cursor-pointer"
                        type="submit"
                        value="Edit Recipe"
                    />
                </div>
            </form>
        </section >
    );
}