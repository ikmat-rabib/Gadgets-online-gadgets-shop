import Swal from "sweetalert2";



const CartCard = ({ displayCart }) => {

    const { _id, name, image, type, brand, price, rating } = displayCart



    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: "DELETE",

                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'You have successfully deleted the item.',
                            'success'
                        )
                        
                    }
                })
                
            }
        })
    }

    return (

        <div className="card w-96 glass shadow-xl">
            <figure className="h-72"><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Type: {type}</p>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}/5</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#aaff03] hover:bg-[#76b300]">Delete</button>
                </div>
            </div>
        </div>

    );
};

export default CartCard;