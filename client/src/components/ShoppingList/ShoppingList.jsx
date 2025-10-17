import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function ShoppingList() {
    const [product, setProduct] = useState("");
    const [shoppingList, setShoppingList] = useState(() => {
        const shoppingList = JSON.parse(localStorage.getItem("shoppingList"));

        return shoppingList || [];
    });

    useEffect(() => {
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    }, [shoppingList]);

    const addProduct = (e) => {
        e.preventDefault();

        if (!product) {
            toast.error("Please enter a product");
            return;
        }

        setShoppingList([...shoppingList, { name: product, isBought: false }]);
        setProduct("");
    };

    const toggleIsBought = (name) => {
        setShoppingList(shoppingList.map(product =>
            product.name === name ? { ...product, isBought: !product.isBought } : product
        ));
    };

    const clearList = () => {
        setShoppingList([]);
    };

    return (
        <section className="w-full min-h-screen flex items-start justify-center pt-30 pb-20 px-4 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.60),rgba(0,0,0,0.30)),url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
            <div className="max-w-lg w-full p-6 bg-gray-50/90 rounded-lg flex-col">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                    Shopping List
                </h2>

                <form onSubmit={addProduct}>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        <input
                            type="text"
                            name="title"
                            className="w-full self-stretch text-sm p-2 border border-gray-200 rounded-lg bg-gray-50"
                            placeholder="e.g. bread"
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                        />
                        <button className="w-full sm:w-2/3 bg-tangerine text-white p-2 rounded-lg cursor-pointer hover:shadow-md">
                            Add product
                        </button>
                    </div>
                </form>

                <ul className="mt-4 min-h-50 space-y-2 text-gray-800">
                    {
                        shoppingList.length === 0 ?
                            (<p className='italic text-center mt-6'>Your shopping list is empty.</p>)
                            :
                            (
                                shoppingList.map((product) => (
                                    <li
                                        key={product.name}
                                        className="flex justify-between items-center rounded-lg px-2 py-1 shadow-sm"
                                    >
                                        <span className={product.isBought ? "line-through text-gray-400" : ""}>{product.name}</span>
                                        <button
                                            onClick={() => toggleIsBought(product.name)}
                                            className={`${product.isBought ? "text-hunter-green" : "text-red-600"} text-sm flex items-center font-semibold cursor-pointer`}
                                        >
                                            {product.isBought ? "done" : "remove"}
                                        </button>
                                    </li>
                                ))
                            )
                    }
                </ul>

                {
                    shoppingList.length > 0 && (
                        <button
                            onClick={clearList}
                            className="w-full mt-4 bg-hunter-green text-white py-2 rounded-lg cursor-pointer hover:shadow-md"
                        >
                            Clear List
                        </button>
                    )
                }
            </div>
        </section>
    );
};