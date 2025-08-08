import { useEffect, useState } from "react";
import { useParams } from "react-router"
import recipeService from "../../services/recipeService";

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        (async () => {
            const result = await recipeService.getOne(recipeId);
            setRecipe(result);
        })()
    }, [recipeId]);

    return (
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

                <hr className="border-gray-200" />
            </div>

            {/* Footer/Nutrition */}
            {/* <footer>
                <h2 className="text-xl font-semibold mb-2">Nutrition</h2>
                <p className="text-gray-600 mb-4">
                    The table below shows nutritional values per serving without the additional fillings.
                </p>
                <table className="w-full border-t border-b border-gray-200 divide-y divide-gray-100 text-sm">
                    <tbody>
                        <tr className="flex justify-between py-2">
                            <td>Calories</td>
                            <td className="font-bold text-pink-700">277kcal</td>
                        </tr>
                        <tr className="flex justify-between py-2">
                            <td>Carbs</td>
                            <td className="font-bold">0g</td>
                        </tr>
                        <tr className="flex justify-between py-2">
                            <td>Protein</td>
                            <td className="font-bold">20g</td>
                        </tr>
                        <tr className="flex justify-between py-2">
                            <td>Fat</td>
                            <td className="font-bold">22g</td>
                        </tr>
                    </tbody>
                </table>
            </footer> */}
        </article>

    )
}