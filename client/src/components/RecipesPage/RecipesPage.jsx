import { useEffect, useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router";
import { useRecipes } from "../../api/recipeApi";

import RecipeItem from "./RecipeItem/RecipeItem";
import Spinner from "../Spinner/Spinner";

export default function RecipesPage() {
    const { recipes, loading, error } = useRecipes();
    const [displayRecipes, setDisplayRecipes] = useState([]);
    const [searchParams] = useSearchParams();
    const location = useLocation();
    // console.log(Object.fromEntries(searchParams));

    const sortOptions = [
        { name: 'All', href: '/recipes' },
        { name: 'Breakfast', href: '/recipes?meal=breakfast' },
        { name: 'Lunch', href: '/recipes?meal=lunch' },
        { name: 'Dinner', href: '/recipes?meal=dinner' },
        { name: 'Snacks', href: '/recipes?meal=snacks' },
    ];

    useEffect(() => {
        const filter = Object.fromEntries(searchParams);

        if (filter.meal) {
            setDisplayRecipes(recipes.filter(recipe => filter.meal === recipe.category));
        } else {
            setDisplayRecipes([...recipes]);
        }
    }, [recipes, searchParams]);

    return (
        <section className="h-screen w-screen bg-[url(https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center">
            <div className="absolute inset-0 backdrop-blur-xs bg-black/30 px-4 pt-30 pb-20 overflow-y-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl text-white font-bold tracking-widest uppercase">Recipes</h2>
                    <div className="w-20 h-1 bg-olivine mx-auto mt-2" />
                </div>

                <div className="flex justify-center flex-wrap gap-3 mb-10">

                    {sortOptions.map(option => (
                        <NavLink
                            key={option.name}
                            to={option.href}
                            className={() => `uppercase border border-olivine px-4 py-2 rounded-md transition-all text-xs tracking-wide 
                                ${location.pathname + location.search === option.href
                                    ? "bg-olivine text-night"
                                    : "text-olivine hover:bg-olivine hover:text-night"}`
                            }
                        >
                            {option.name}
                        </NavLink>)
                    )}

                </div>

                <div className={`grid gap-8 max-w-6xl mx-auto px-4 ${displayRecipes.length === 0 ? 'grid-cols-1 place-items-center' : 'md:grid-cols-2'}`}>

                    {
                        loading ?
                            <Spinner /> :
                            (displayRecipes.length === 0 ?
                                (<p className="text-white italic text-xl">{error?.message}</p>) 
                                :
                                (displayRecipes.map(recipe => <RecipeItem key={recipe._id} {...recipe} />))
                            )
                    }

                </div>
            </div>
        </section>
    )
}