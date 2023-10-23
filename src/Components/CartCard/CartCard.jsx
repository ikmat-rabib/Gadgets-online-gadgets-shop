


const CartCard = ({ displayCart }) => {

    const { name, image, type, brand, price, rating } = displayCart

    return (

        <div className="card w-96 glass shadow-xl">
            <figure className="h-72"><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Type: {type}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-[#aaff03] hover:bg-[#76b300]">Delete</button>
                </div>
            </div>
        </div>

    );
};

export default CartCard;