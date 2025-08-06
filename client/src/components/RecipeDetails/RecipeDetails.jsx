export default function RecipeDetails() {
    return (
        <article className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8 text-gray-800">

            {/* Image */}
            <div className="overflow-hidden rounded-lg">
                <img
                    src="images/image-omelette.jpeg"
                    alt="Omelette"
                    className="w-full object-cover"
                />
            </div>

            {/* Header Section */}
            <header>
                <h1 className="text-3xl font-bold mb-4">Simple Omelette Recipe</h1>
                <p className="text-gray-600">
                    An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                    to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </p>

                <div className="mt-6 bg-pink-50 p-4 rounded-md border-l-4 border-pink-400">
                    <h3 className="text-lg font-semibold text-pink-800 mb-2">Preparation time</h3>
                    <ul className="list-disc list-inside text-sm space-y-1 text-pink-800">
                        <li><strong>Total:</strong> Approximately 10 minutes</li>
                        <li><strong>Preparation:</strong> 5 minutes</li>
                        <li><strong>Cooking:</strong> 5 minutes</li>
                    </ul>
                </div>
            </header>

            {/* Main Section */}
            <div className="space-y-6">
                {/* Ingredients */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>2-3 large eggs</li>
                        <li>Salt, to taste</li>
                        <li>Pepper, to taste</li>
                        <li>1 tablespoon of butter or oil</li>
                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                </div>

                <hr className="border-gray-200" />

                {/* Instructions */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        <li>
                            <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until
                            well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                        </li>
                        <li>
                            <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.
                        </li>
                        <li>
                            <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs.
                            Tilt the pan to ensure even coverage.
                        </li>
                        <li>
                            <strong>Add fillings (optional):</strong> When the edges set and the middle is slightly runny,
                            sprinkle your chosen fillings over one half.
                        </li>
                        <li>
                            <strong>Fold and serve:</strong> Carefully lift one edge and fold it over the fillings. Let it cook for
                            another minute, then slide onto a plate.
                        </li>
                        <li>
                            <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
                        </li>
                    </ol>
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