const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        img: "/src/components/RecipesPage/images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        img: "/src/components/RecipesPage/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        img: "/src/components/RecipesPage/images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        img: "/src/components/RecipesPage/images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        img: "/src/components/RecipesPage/images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "/src/components/RecipesPage/images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        img: "/src/components/RecipesPage/images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "/src/components/RecipesPage/images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        img: "/src/components/RecipesPage/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        img: "/src/components/RecipesPage/images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

export default function RecipesPage() {
    return (
        <section className="py-30 bg-night">
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
                <button className="capitalize border border-olivine text-olivine px-4 py-2 rounded-md transition-all hover:bg-olivine hover:text-night text-sm tracking-wide" type="button" data-id="shakes">
                    shakes
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
                            <p className="text-platinum/50 text-xs">{item.desc}</p>
                            {/* add details btn */}
                        </div>
                    </article>
                ))}

            </div>
        </section>

    )
}