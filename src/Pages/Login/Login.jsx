import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password, photo);
       
    }

    return (
        <div >
            <div className="py-32 ">
                <div className="sm:w-auto md:w-2/4 mx-auto text-center text-black drop-shadow-2xl bg-slate-50 rounded-xl py-6 my-10">
                    <h2 className="text-3xl mt-6 font-bold">Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body md:w-mx-auto">

                        <div className="form-control">
                            <label className="label">
                                <span className="text-black label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-black" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-black label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />

                        </div>

                        {/* {
                            registerError && <p className="bg-white text-2xl py-2 font-medium text-red-600 rounded-lg">{registerError}</p>
                        } */}


                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#aaff03] hover:bg-[#76b300] text-black border-0 ">Login</button>
                        </div>
                    </form>
                    <p className="mb-">Don't have an account? <Link className="text-green-700 font-bold" to='/register'>Register Here.</Link></p>

                    <div>
                        <p>or,</p>
                        <h3 className="text-2xl font-semibold">Sign in with</h3>
                        <button className="p-3 my-3 text-3xl border rounded-lg bg-[#aaff03] hover:bg-[#76b300] text-indigo-800"> </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;