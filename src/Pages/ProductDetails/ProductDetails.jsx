import { Link, useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {

    const products = useLoaderData()
    const { _id } = useParams()

    const product = products.find(product => product.id == _id)
    console.log(_id, product);

    return (
        <div className="w-3/4 mx-auto my-10">

            <div className="sm:block md:flex bg-base-100 shadow-xl ">
                <figure className="w-1/2"><img src={product.image} alt="" /></figure>
                <div className="w-1/2 my-auto text-center">
                    <h2 className="text-2xl font-bold my-3">{product.name}</h2>
                    <p className="text-xl font-medium">Price: ${product.price}</p>
                    <p className="text-xl font-medium">Brand: {product.brand}</p>
                    <p className="text-xl font-medium">Rating: {product.rating}</p>
                </div>
            </div>
            <p>{product.description}</p>
            <Link to="/cart" className="card-actions justify-center my-5">
                <button className="btn btn-primary">Add to Cart</button>
            </Link>
        </div>
    );
};

export default ProductDetails;