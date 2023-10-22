import { Link } from "react-router-dom";


const ProductCard = ({displayProduct}) => {

   
    const { name, image, type, brand, price, rating, _id} = displayProduct;

    return (
        <div className="card w-96 mx-auto glass shadow-xl">
            <figure className="h-40 w-auto bg-cover"><img src={image} alt="" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>Brand: {brand}</p>
                <p>Product Type: {type}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                
                <div className="card-actions justify-center">
                    <Link to={`/product/${_id}`}>
                    <button className="btn bg-[#aaff03] hover:bg-[#76b300]">Details</button>
                    </Link>
                    <Link to="/update-product">
                    <button className="btn bg-[#aaff03] hover:bg-[#76b300]">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;