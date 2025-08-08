const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        img: "/src/components/RecipesPage/images/item-1.jpeg",
        instructions: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        img: "/src/components/RecipesPage/images/item-2.jpeg",
        instructions: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        img: "/src/components/RecipesPage/images/item-3.jpeg",
        instructions: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        img: "/src/components/RecipesPage/images/item-4.jpeg",
        instructions: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        img: "/src/components/RecipesPage/images/item-5.jpeg",
        instructions: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "/src/components/RecipesPage/images/item-6.jpeg",
        instructions: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
];

export default function RecipesPage() {
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

                <div className="grid gap-8 max-w-6xl mx-auto px-4 md:grid-cols-2">

                    {menu.map((item) => (
                        <article key={item.id} className="grid gap-4 md:grid-cols-[200px_1fr] capitalize">
                            <img src={item.img} alt={item.title} className="h-48 w-full object-cover border-4 border-olivine rounded-md md:h-40" />
                            <div>
                                <header className="flex justify-between items-center border-b border-platinum pb-1 mb-2">
                                    <h4 className="text-lg text-white font-semibold">{item.title}</h4>
                                </header>
                                <p className="text-platinum/60 text-xs">{item.instructions}</p>
                                {/* add details btn */}
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    )
}