
const Contact = () => {
    return (
        <div>
            <div className="mx-2">
                <div className="md:flex bg-slate-50 rounded-xl max-w-6xl mx-auto my-20 drop-shadow-2xl">
                    <div className="w-1/2 text-center my-auto mx-auto p-4">
                        <h3 className="text-2xl font-bold mb-2 underline">Contact Us</h3>
                        <p>Call: 012345678901</p>
                        <p>Address: House-A, Road-B, Dhaka </p>
                    </div>
                    <form className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="text-black label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-black label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-black label-text">Your message here</span>
                            </label>
                            <textarea className="rounded-lg max-h-fit" name="text-area" id="" cols="" rows="6"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#aaff03] hover:bg-[#76b300] text-indigo-800 border-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;