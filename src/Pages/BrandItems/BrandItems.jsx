import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import ProductCard from "../../Components/ProductCard/ProductCard";


const BrandItems = () => {

    const products = useLoaderData()
    const { brandName } = useParams()

    console.log(brandName);

    const allProduct = products.filter(product => product.brand === brandName)
    console.log( allProduct );


    return (
        <div>
            <Slider></Slider>
            <h2 className="text-4xl my-10 font-bold text-center">{brandName}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 max-w-6xl mx-auto gap-10">
            {
                allProduct.length?  allProduct.map(displayProduct => <ProductCard key={displayProduct._id} displayProduct={displayProduct}></ProductCard>)
                : 
                <h2 className="text-4xl font-medium text-center my-10">Sorry! No Product here.</h2>
            }
            </div>
        </div>
    );
};

export default BrandItems;