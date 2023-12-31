import Swal from 'sweetalert2'


const AddProductPage = () => {

    const handleAddProduct = e => {
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

        const newProduct = { name, image, type, brand, brandImage, price, rating, description};

        console.log(newProduct);

        fetch('https://assignment-10-server-5gmm1h75x-ikmat-rabib.vercel.app/product', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className="max-w-screen-lg mx-auto my-10 p-6 glass rounded-xl text-black dark:text-white drop-shadow-2xl">
            <h2 className="text-3xl font-bold text-center ">Add Product Here</h2>
            <form onSubmit={handleAddProduct} className="card-body">

                {/* name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Product Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Product" className="input input-bordered" required />
                </div>

                {/* image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Product Image</span>
                    </label>
                    <input type="text" name="image" placeholder="Product Image" className="input input-bordered" required />
                </div>

                {/* type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Product Type</span>
                    </label>
                    <input type="text" name="type" placeholder="Product Type" className="input input-bordered" required />
                </div>

                {/* brand */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Brand Name</span>
                    </label>
                    <input type="text" name="brand" placeholder="Brand" className="input input-bordered" required />
                </div>

                {/* brand image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Brand Image</span>
                    </label>
                    <input type="text" name="brandImage" placeholder="Brand Image Link" className="input input-bordered" required />
                </div>

                {/* price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                </div>

                {/* rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                </div>

                {/* description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text dark:text-white">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" id="" cols="30" rows="5"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-[#aaff03] hover:bg-[#76b300]" type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default AddProductPage;