import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

import recipeService from "../../services/recipeService";

import RecipeItem from "./RecipeItem/RecipeItem";

export default function RecipesPage() {
    const [recipes, setRecipes] = useState([]);
    const [displayRecipes, setDisplayRecipes] = useState([]);

    const [searchParams] = useSearchParams();
    // console.log(Object.fromEntries(searchParams));

    const sortOptions = [
        { name: 'All', href: '/recipes', current: true },
        { name: 'Breakfast', href: '/recipes?meal=breakfast', current: false },
        { name: 'Lunch', href: '/recipes?meal=lunch', current: false },
        { name: 'Dinner', href: '/recipes?meal=dinner', current: false },
        { name: 'Snacks', href: '/recipes?meal=snacks', current: false },
    ];

    useEffect(() => {
        recipeService.getAll()
            .then(res => setRecipes(res))
    }, []);

    useEffect(() => {
        const filter = Object.fromEntries(searchParams);
        console.log(filter.meal);

        if (filter.meal) {
            setDisplayRecipes(recipes.filter(recipe => filter.meal === recipe.category));
        } else {
            setDisplayRecipes([...recipes]);
        }
    }, [recipes, searchParams]);

    return (
        <section className="h-screen w-screen bg-[url(https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center">
            <div className="absolute inset-0 backdrop-blur-sm bg-black/30 px-4 pt-30 pb-20 overflow-y-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl text-white font-bold tracking-widest uppercase">Recipes</h2>
                    <div className="w-20 h-1 bg-olivine mx-auto mt-2" />
                </div>

                <div className="flex justify-center flex-wrap gap-3 mb-10">

                    {sortOptions.map(option => (
                        <Link
                            key={option.name}
                            to={option.href}
                            className={`capitalize border border-olivine text-olivine px-4 py-2 rounded-md transition-all hover:bg-olivine hover:text-night text-sm tracking-wide`}
                        >
                            {option.name}
                        </Link>)
                    )}

                </div>

                <div className={`grid gap-8 max-w-6xl mx-auto px-4 ${displayRecipes.length === 0 ? 'grid-cols-1 place-items-center' : 'md:grid-cols-2'}`}>

                    {
                        displayRecipes.length > 0 ?
                            displayRecipes.map(recipe => <RecipeItem key={recipe._id} {...recipe} />)
                            :
                            <h3 className="text-3xl text-white font-bold tracking-widest ">No recipes yet.</h3>
                    }

                </div>
            </div>
        </section>
    )
}