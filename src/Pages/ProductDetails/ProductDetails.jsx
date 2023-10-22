
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {

    const products = useLoaderData()
    const { id } = useParams()

    const product = products.find(product => product._id == id)

    const handleAddToCart = () =>{
        const newCart = {id}
        console.log(newCart);

        fetch('http://localhost:5000/cart', {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newCart)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully added to the Cart',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    console.log(id, product);

    return (
        <div className="w-3/4 mx-auto my-10">

            <div className="sm:block md:flex glass rounded-xl shadow-xl my-10 py-10">
                <figure className="w-1/2"><img src={product.image} alt="" /></figure>
                <div className="w-1/2 my-auto text-center ">
                    <h2 className="text-2xl font-bold my-3">{product.name}</h2>
                    <p className="text-xl font-medium">Price: ${product.price}</p>
                    <p className="text-xl font-medium">Type: {product.type}</p>
                    <p className="text-xl font-medium">Brand: {product.brand}</p>
                    <p className="text-xl font-medium">Rating: {product.rating}</p>
                </div>
            </div>
            <p className="p-5">{product.description}</p>
            <div className="flex justify-center">
                <button onClick={handleAddToCart} className="btn bg-[#aaff03] hover:bg-[#76b300] ">Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;