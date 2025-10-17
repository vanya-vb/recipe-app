import { Link } from 'react-router'

export default function RecipeItem({ _id, title, category, imageUrl, ingredients }) {
    ingredients = ingredients.join(', ');

    return (
        <article className="grid gap-4 sm:grid-cols-[200px_1fr] capitalize">
            <Link to={`/recipes/${_id}/details`}>
                <div className="relative">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-48 w-full object-cover border-4 border-olivine rounded-md lg:h-36"
                    />
                    <button className="absolute bottom-2 right-2 bg-olivine text-night px-2 py-1 rounded-md text-xs font-semibold transition hover:bg-olivine/80 cursor-pointer">
                        Details
                    </button>
                </div>
            </Link>

            <div>
                <header className="flex justify-between items-center border-b border-platinum pb-1 mb-2">
                    <h4 className="text-lg text-white font-semibold">{title}</h4>
                    <span className="text-xs text-olivine px-2 py-0.5">
                        {category}
                    </span>
                </header>
                <p className="text-platinum/80 text-xs">{ingredients}</p>
            </div>
        </article>

    )
}