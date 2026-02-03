import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import Cart from './Cart';

const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function Order() {
    const [pizzaTypes, setPizzaTypes] = useState([]) // the pizza list from the server
    const [pizzaType, setPizzaType] = useState("pepperoni"); // which one is chosen 
    const [pizzaSize, setPizzaSize] = useState("M");
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    async function checkout() {
        setLoading(true);

        await fetch("/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart,
            }),
        });

        setCart([]); // empty the cart after the checkout transaction happens
        setLoading(false);
    }

    let price, selectedPizza;  // derivate state variables

    if (!loading) {
        selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id); // For each in the list, "Does this pizza's id match the pizzaType currently selected in the dropdown?"
        price = intl.format(
            selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "", // if the pizza size exists, return price otherwise empty string
        );
    }

    useEffect(() => { // this function will run once at the beginning, by giving an empty dependency array we are telling it not to track any variable
        fetchPizzaTypes();
    }, [])

    async function fetchPizzaTypes() {
        const pizzaRes = await fetch("/api/pizzas");
        const pizzaJson = await pizzaRes.json(); // turn the response into a JS object
        setPizzaTypes(pizzaJson); // save the list to state
        setLoading(false); // tell the UI we are done!
    }

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }])
            }}>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select
                            onChange={(e) => setPizzaType(e.target.value)}
                            name="pizza-type"
                            value={pizzaType}
                        >
                            {pizzaTypes.map((pizza) => (
                                <option key={pizza.id} value={pizza.id}>
                                    {pizza.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    checked={pizzaSize === "S"}
                                    type="radio"
                                    name="pizza-size"
                                    value="S"
                                    id="pizza-s"
                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    checked={pizzaSize === "M"}
                                    type="radio"
                                    name="pizza-size"
                                    value="M"
                                    id="pizza-m"
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                    checked={pizzaSize === "L"}
                                    type="radio"
                                    name="pizza-size"
                                    value="L"
                                    id="pizza-l"
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to Cart</button>
                </div>
                {loading ? (
                    <h3>LOADING …</h3>
                ) : (
                    <div className="order-pizza">
                        <Pizza
                            name={selectedPizza.name}
                            description={selectedPizza.description}
                            image={selectedPizza.image}
                        />
                        <p>{price}</p>
                    </div>
                )}
            </form>
            {
                loading ? <h2>LOADING...</h2> : <Cart checkout={checkout} cart={cart} />
            }
        </div>
    );
}