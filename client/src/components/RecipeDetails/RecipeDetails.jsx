import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router"
import recipeService from "../../services/recipeService";
import CommentsDisplay from "../CommentsDisplay/CommentsDisplay";
import CommentsCreate from "../CommentsCreate/CommentsCreate";

export default function RecipeDetails({ email }) {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();
    const navigate = useNavigate();

    // fetch data
    useEffect(() => {
        (async () => {
            const result = await recipeService.getOne(recipeId);
            setRecipe(result);
        })()
    }, [recipeId]);

    // delete handler
    const gameDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${recipe.title} recipe?`);

        if (!hasConfirm) {
            return;
        }

        await recipeService.delete(recipeId);

        navigate('/recipes')
    };

    return (
        <>
            <article className="max-w-3xl mx-auto my-25 p-10 bg-white rounded-lg shadow-md space-y-8 text-gray-800">

                <div className="overflow-hidden rounded-lg">
                    <img
                        src={recipe.imageUrl}
                        alt={recipe.title}
                        className="w-full object-cover"
                    />
                </div>

                {/* Header Section */}
                <header>
                    <h1 className="text-3xl font-bold mb-4 capitalize">{recipe.title}</h1>

                    <div className="mt-6 bg-olivine/20 p-4 rounded-md border-l-4 border-green-hunter">
                        <h2 className="text-xl font-semibold mb-2 underline">Ingredients:</h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </div>
                </header>

                {/* Main Section */}
                <div className="space-y-8">

                    <hr className="border-gray-200" />

                    {/* Instructions */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2 underline">Instructions:</h2>
                        <p className="list-decimal list-inside space-y-3 text-gray-700">
                            {recipe.instructions}
                        </p>
                    </div>

                </div>

                <div className="flex gap-2 justify-end">
                    <Link
                        to={`/recipes/${recipeId}/edit`}
                        className="self-end bg-olivine text-white px-2 py-1 rounded-md text-xs font-semibold transition hover:bg-olivine/80 cursor-pointer"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={gameDeleteClickHandler}
                        className="self-end bg-olivine text-white px-2 py-1 rounded-md text-xs font-semibold transition hover:bg-olivine/80 cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
                <hr className="border-gray-200" />

                <CommentsDisplay />

                <CommentsCreate email={email} recipeId={recipeId} />

            </article>
        </>

    )
}