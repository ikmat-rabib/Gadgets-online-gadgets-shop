import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";


const BrandItems = () => {

    const brands = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    const brand = brands.find(brand => brand._id === idInt)
    console.log( brand, id );

    // const { brandName, brandImage} = brand

    return (
        <div>
            <Slider></Slider>
            <h2>sdfbxfghfgjghm {brand}</h2>
            {/* <h2>grtgrt {brand.brandName}</h2> */}
        </div>
    );
};

export default BrandItems;