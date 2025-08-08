export default function RecipeItem({ title, category, imageUrl, instructions }) {
    return (
        <article className="grid gap-4 md:grid-cols-[200px_1fr] capitalize">
            <img src={imageUrl} alt={title} className="h-48 w-full object-cover border-4 border-olivine rounded-md md:h-40" />
            <div>
                <header className="flex justify-between items-center border-b border-platinum pb-1 mb-2">
                    <h4 className="text-lg text-white font-semibold">{title}</h4>
                </header>
                <p className="text-platinum/60 text-xs">{instructions}</p>
                {/* add details btn */}
            </div>
        </article>
    )
}