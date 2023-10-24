import { useLoaderData } from "react-router-dom";
import CartCard from "../../Components/CartCard/CartCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Cart = () => {

    const cartProducts = useLoaderData()
    console.log(cartProducts);

    const {user} = useContext(AuthContext)

    const selectedCart = cartProducts.filter( selected => selected.email == user.email)
    console.log(selectedCart);

    return (
        <div>
            <div className=" max-w-6xl mx-auto my-10">
                <h2 className="text-center text-3xl font-bold underline my-10">Cart</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        selectedCart.map(displayCart => <CartCard key={displayCart._id} displayCart={displayCart}></CartCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Cart;