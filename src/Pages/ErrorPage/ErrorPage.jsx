import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className="w-1/2 mx-auto" src="https://i.ibb.co/34Ktdw2/404-error.jpg" alt="" />
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;