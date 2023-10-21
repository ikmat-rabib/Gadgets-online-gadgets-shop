import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import ProductCard from "../../Components/ProductCard/ProductCard";


const BrandItems = () => {

    const products = useLoaderData()
    const { brandName } = useParams()

    const allProduct = products.filter(product => product.brand === brandName)
    console.log( allProduct );


    return (
        <div>
            <Slider></Slider>
            <h2 className="text-4xl font-bold text-center"> {brandName}</h2>
            {
                allProduct.map(displayProduct => <ProductCard key={displayProduct._id} displayProduct={displayProduct}></ProductCard>)
            }
        </div>
    );
};

export default BrandItems;