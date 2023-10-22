import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {

    const { brandName, brandImage } = brand

    return (
        <Link to={`/brand/${brandName}`}>
            <div className="card w-96 glass shadow-xl">
                <figure className="h-80 w-auto bg-center bg-cover p-4">
                    <img src={brandImage} alt="" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-2xl font-bold text-center ">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;