export default function RecipeCreate() {
    return (
        <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center py-30 px-4 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.60),rgba(0,0,0,0.30)),url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
            <form id="create" className="w-full max-w-xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Add Recipe</h1>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter a recipe title..."
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                        <select
                            id="category"
                            name="category"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            defaultValue=""
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
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Ingredients:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Add an ingredient..."
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Instructions:</label>
                        <textarea
                            id="summary"
                            name="summary"
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                </div>

                <div className="mt-6">
                    <input
                        className="w-full bg-tangerine text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                        type="submit"
                        value="Create Recipe"
                    />
                </div>
            </form>
        </section >

    );
}