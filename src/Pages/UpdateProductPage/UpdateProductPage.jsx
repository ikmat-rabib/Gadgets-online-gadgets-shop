import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProductPage = () => {

    const product = useLoaderData();

    const { name, image, type, brand, brandImage, price, rating, description, _id } = product



    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const type = form.type.value;
        const brand = form.brand.value;
        const brandImage = form.brandImage.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedProduct = { name, image, type, brand, brandImage, price, rating, description };

        console.log(updatedProduct);

        fetch(`https://assignment-10-server-5gmm1h75x-ikmat-rabib.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0 ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="max-w-screen-lg mx-auto my-10 p-6 glass rounded-xl text-black dark:text-white drop-shadow-2xl">
            <h2 className="text-3xl font-bold text-center ">Update Product: {name}</h2>
            <form onSubmit={handleUpdateProduct} className="card-body">

                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Product Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={name} placeholder="Product" className="input input-bordered dark:text-black" required />
                </div>

                {/* image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Product Image</span>
                    </label>
                    <input type="text" name="image" defaultValue={image} placeholder="Product Image" className="input input-bordered dark:text-black" required />
                </div>

                {/* type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Product Type</span>
                    </label>
                    <input type="text" name="type" defaultValue={type} placeholder="Product Type" className="input input-bordered dark:text-black" required />
                </div>

                {/* brand */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Brand Name</span>
                    </label>
                    <input type="text" name="brand" defaultValue={brand} placeholder="Brand" className="input input-bordered dark:text-black" required />
                </div>

                {/* brand image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Brand Image</span>
                    </label>
                    <input type="text" name="brandImage" defaultValue={brandImage} placeholder="Brand Image Link" className="input input-bordered dark:text-black" required />
                </div>

                {/* price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Price</span>
                    </label>
                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered dark:text-black" required />
                </div>

                {/* rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Rating</span>
                    </label>
                    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered dark:text-black" required />
                </div>

                {/* description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered dark:text-black" defaultValue={description} name="description" id="" cols="30" rows="5"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-[#aaff03] hover:bg-[#76b300]" type="submit" value="Update Product" />
                </div>
            </form>
        </div>
    );
};


export default UpdateProductPage;