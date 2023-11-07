// import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, service_image, service_name, service_description, button, service_provider_img, service_provider_name, service_area, service_price } = service;
    return (
        <div className="card p-8 bg-[#cee3db]  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service_image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title lg:mt-[-10px] text-3xl">{service_name}</h2>
                <div className="flex justify-center items-center flex-wrap gap-4">
                    <h2 className="font-bold">Service Provider: {service_provider_name}</h2>
                    <h3 className="font-bold">Price: {service_price}</h3>

                </div>
                <div className="avatar">
                    <div className="w-28 mask mask-squircle">
                        <img src={service_provider_img} />
                    </div>
                </div>
                
                <div className=" md:w-3/4 flex justify-center items-center">
                    <p className="">{service_description}</p>
                </div>


                {/* <div className="avatar">
                    <div className="w-28 mask mask-squircle">
                        <img src={service_provider_img} />
                    </div>
                </div> */}



            </div>
            <div className="mb-3">
                <button className="btn btn-block ">{button}</button>
            </div>


        </div>
    );
};

export default ServiceCard;