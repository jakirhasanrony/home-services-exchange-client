import { Link } from "react-router-dom";

const ProviderSpecificServiceCard = ({ providerSpecificService }) => {
    const { _id, service_image, service_name, service_description, button, service_provider_img, service_provider_name, service_area, service_price } = providerSpecificService;
    return (
        <Link to={`/serviceDetails/${_id}`}>
            <div className="card w-96 bg-[#f6efea] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={service_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Provided By: {service_provider_name}</h2>
                    <p>{service_description}</p>

                </div>
            </div>
        </Link>
    );
};
export default ProviderSpecificServiceCard;