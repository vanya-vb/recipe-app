import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useRecipes } from "../../api/recipeApi";

import RecipeItem from "./RecipeItem/RecipeItem";
import Spinner from "../Spinner/Spinner";
import Pagination from "../Pagination/Paginaton";

export default function RecipesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { recipes, loading, error } = useRecipes();
    const [page, setPage] = useState(1);

    const sortOptions = [
        { name: 'all', setterFunction: () => setSearchParams("") },
        { name: 'breakfast', setterFunction: () => setSearchParams('?meal=breakfast') },
        { name: 'lunch', setterFunction: () => setSearchParams('?meal=lunch') },
        { name: 'dinner', setterFunction: () => setSearchParams('?meal=dinner') },
        { name: 'snacks', setterFunction: () => setSearchParams('?meal=snacks') },
    ];

    const mealFilter = searchParams.get("meal");

    const displayRecipes = mealFilter ? recipes.filter(recipe => recipe.category === mealFilter) : recipes;

    useEffect(() => {
        setPage(1);
    }, [searchParams]);

    // Calculate pages
    const recipesPerPage = 4;
    const totalPages = Math.ceil(displayRecipes.length / recipesPerPage);
    const indexOfLast = page * recipesPerPage;
    const indexOfFirst = indexOfLast - recipesPerPage;
    const currentRecipes = displayRecipes.slice(indexOfFirst, indexOfLast);

    return (
        <section className="h-screen w-screen bg-[url(https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center">
            <div className="absolute inset-0 backdrop-blur-xs bg-black/30 px-4 pt-30 pb-20 md:pb-15 overflow-y-auto">
                <div className="text-center mb-6">
                    <h2 className="text-3xl text-white font-bold tracking-widest uppercase">Recipes</h2>
                    <div className="w-20 h-1 bg-olivine mx-auto mt-2" />
                </div>

                <div className="flex justify-center flex-wrap gap-3 mb-10">
                    
                    {/* Filters */}
                    {sortOptions.map(option => (
                        <button
                            key={option.name}
                            onClick={option.setterFunction}
                            className={`uppercase border border-olivine px-4 py-1 rounded-md transition-all text-xs tracking-wide cursor-pointer
                                ${mealFilter === option.name
                                    ? "bg-olivine text-night"
                                    : "text-olivine hover:bg-olivine hover:text-night"}`
                            }
                        >
                            {option.name}
                        </button>
                    ))}
                </div>

                <div className={`grid gap-8 max-w-6xl mx-auto px-4 ${displayRecipes.length === 0 ? 'grid-cols-1 place-items-center' : 'md:grid-cols-2'}`}>
                    {
                        loading ?
                            <Spinner /> :
                            (displayRecipes.length === 0 ?
                                (<p className="text-white italic text-xl">{error?.message}</p>)
                                :
                                (currentRecipes.map(recipe =>
                                    <RecipeItem
                                        key={recipe._id}
                                        searchParams={searchParams}
                                        mealFilter={mealFilter}
                                        {...recipe}
                                    />))
                            )
                    }
                </div>

                <Pagination totalPages={totalPages} page={page} onPageChange={setPage} />
            </div>
        </section>
    )
}