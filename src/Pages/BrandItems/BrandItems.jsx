import { useLoaderData, useParams } from "react-router-dom";


const BrandItems = () => {

    const brands = useLoaderData()

    const { _id, brandName } = useParams()
    const brand = brands.find(brandn => brandn.brand == brandName)
    console.log(brands.brandName, brand, _id );

    return (
        <div>
            <h2>grtgrt</h2>
        </div>
    );
};

export default BrandItems;