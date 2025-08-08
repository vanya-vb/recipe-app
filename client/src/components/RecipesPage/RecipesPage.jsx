import { useEffect, useState } from "react";
import recipeService from "../../services/recipeService";
import RecipeItem from "./RecipeItem/RecipeItem";


export default function RecipesPage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(res => setRecipes(res))
    }, []);

    // console.log(recipes);

    return (
        <section className="h-screen w-full py-30 bg-[url(https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center">
            <div class="absolute inset-0 backdrop-blur-sm bg-black/30 px-4 py-30 overflow-y-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl text-white font-bold tracking-widest uppercase">Recipes</h2>
                    <div className="w-20 h-1 bg-olivine mx-auto mt-2" />
                </div>

                <div className="flex justify-center flex-wrap gap-3 mb-10">
                    <button className="capitalize border border-olivine text-olivine px-4 py-2 rounded-md transition-all hover:bg-olivine hover:text-night text-sm tracking-wide" type="button" data-id="all">
                        all
                    </button>
                    <button className="capitalize border border-olivine text-olivine px-4 py-2 rounded-md transition-all hover:bg-olivine hover:text-night text-sm tracking-wide" type="button" data-id="breakfast">
                        breakfast
                    </button>
                    <button className="capitalize border border-olivine text-olivine px-4 py-2 rounded-md transition-all hover:bg-olivine hover:text-night text-sm tracking-wide" type="button" data-id="lunch">
                        lunch
                    </button>
                    <button className="capitalize border border-olivine text-olivine px-4 py-2 rounded-md transition-all hover:bg-olivine hover:text-night text-sm tracking-wide" type="button" data-id="lunch">
                        dinner
                    </button>
                    <button className="capitalize border border-olivine text-olivine px-4 py-2 rounded-md transition-all hover:bg-olivine hover:text-night text-sm tracking-wide" type="button" data-id="shakes">
                        Snacks
                    </button>
                </div>

                <div className={`grid gap-8 max-w-6xl mx-auto px-4 ${recipes.length === 0 ? 'grid-cols-1 place-items-center' : 'md:grid-cols-2'}`}>

                    {
                        recipes.length > 0 ?
                            recipes.map(recipe => <RecipeItem key={recipe._id} {...recipe} />)
                            :
                            <h3 className="text-3xl text-white font-bold tracking-widest ">No recipes yet.</h3>
                    }

                </div>
            </div>
        </section>
    )
}