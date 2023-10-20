import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard/BrandCard";


const OurBrands = () => {

    const brands = useLoaderData()

    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <h3 className="text-3xl font-bold text-center">Our Brands: {brands.length}</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default OurBrands;