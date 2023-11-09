import { Link } from "react-router-dom";

const MyAddedCard = ({ addedService, handleDelete }) => {




    const { _id, service_image, service_name, service_description, service_provider_img, service_provider_name, service_area, service_price, service_provider_email } = addedService;
    return (
        <div className="" style={{ background: 'linear-gradient(to right, #c2e0ff, #f0f0f0)' }}>
            <div className=" mx-auto p-8  grid grid-cols-1 justify-center items-center" >
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
                                    {/*  */}
                                    <Link to={`/update/${_id}`}>
                                        <button className="btn mt-2 btn-block bg-[#cee3db] text-black font-bold">Update This Service</button>
                                    </Link>
                                    {/* <button onClick={openModal} className="btn mt-2 btn-block bg-[#cee3db] text-black font-bold">Book Now</button> */}

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
                                    <button onClick={() => handleDelete(_id)} className="btn btn-block bg-[#cee3db] text-black font-bold">Delete This Service</button>


                                </div>
                                <img src={service_provider_img} className="max-w-sm rounded-lg shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-3/4 border border-amber-700  border-b-2">
            </div>
        </div>
    );
};

export default MyAddedCard;