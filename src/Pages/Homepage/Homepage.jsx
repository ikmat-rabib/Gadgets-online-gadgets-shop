import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import AboutUs from "../../Components/Feedback/Feedback";
import OurBrands from "../../Components/OurBrands/OurBrands";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <OurBrands></OurBrands>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Homepage;