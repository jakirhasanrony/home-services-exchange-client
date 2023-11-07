
import { Link, useLoaderData } from "react-router-dom";


const ServiceDetailsCard = () => {
    const singleService = useLoaderData();
    const { _id, service_image, service_name, service_description, service_provider_img, service_provider_name, service_area, service_price } = singleService;




    return (
        <div className=" my-4 shadow-lg mx-auto p-8  grid grid-cols-1 justify-center items-center" style={{ background: 'linear-gradient(to right, #c2e0ff, #f0f0f0)' }}>
            <div>
                <div className="flex flex-wrap justify-center items-center ">
                    <div >
                        <div className="hero-content  flex-col lg:flex-row">
                            <img src={service_image} className="max-w-sm rounded-lg shadow-2xl " />
                            <div className="ml-3 grid grid-cols-1 ">
                                <h1 className="text-3xl text-gray-500 font-bold">Service Name: {service_name}</h1>
                                <h1 className="text-2xl text-gray-500 font-bold"></h1>
                                <p className="pt-6">{service_description}</p>
                                <p className="pt-2">Service Price: {service_price}</p>
                                <button className="btn mt-2 btn-block bg-[#cee3db] text-black font-bold">Book Now</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <div >
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="ml-3">
                                <h1 className="text-3xl text-gray-500 font-bold">Service Provider: Mr. {service_provider_name}</h1>
                                <p className="py-6">Service Area: {service_area}</p>
                                <Link to="/services">
                                    <button className="btn btn-block bg-[#cee3db] text-black font-bold">Back To Services Page</button>
                                </Link>

                            </div>
                            <img src={service_provider_img} className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;