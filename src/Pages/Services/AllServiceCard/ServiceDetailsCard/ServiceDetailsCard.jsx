import { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";


const ServiceDetailsCard = () => {
    const singleService = useLoaderData();
    const { _id, service_image, service_name, service_description, service_provider_img, service_provider_name, service_area, service_price } = singleService;

    const modalRef = useRef();

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    }

   
    return (
        <>
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
                                    <button onClick={openModal} className="btn mt-2 btn-block  bg-[#cee3db] text-black font-bold">Book Now</button>

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

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="rounded-lg bg-orange-50 py-4 px-8">
                    <h2 className="text-center text-4xl my-10">Update Item</h2>
                    <div className="modal-action">
                        <form  method="dialog" className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex items-center justify-center">
                                    <input className="input-text" type="text" name="foodName" placeholder="Food Name"  required />
                                    <input className="input-text" type="text" name="foodImage" placeholder="Food Image"  />
                                </div>
                                <div className="flex items-center justify-center">
                                    <input className="input-text" type="text" name="foodCategory" placeholder="Food Category" required />
                                    <input className="input-text" type="text" name="quantity" placeholder="Quantity"  />
                                </div>
                                <div>
                                    <input className="input-text" type="text" name="price" placeholder="Price"required />
                                    <input className="input-text" type="text" name="addBy" placeholder="Add By"  required />
                                </div>
                                <div>
                                    <input className="input-text" type="text" name="foodOrigin" placeholder="Food Origin" required />
                                    <input className="input-text" type="text" name="shortDescription" placeholder="Short Description"  required />
                                </div>
                            </div>
                            <div className="my-10 flex justify-center items-center gap-16">
                                <button className="bg-orange-300 cursor-pointer rounded-lg bg-opacity-60 hover:bg-opacity-80 px-14 py-4 border-none flex justify-center items-center">
                                    <input className="text-[22px]" type="submit" value="Update" />
                                </button>
                                <button onClick={closeModal()} className="bg-red-400 cursor-pointer rounded-lg bg-opacity-60 hover:bg-opacity-80 px-14 py-4 border-none flex justify-center items-center">
                                    <div className="text-[22px]">Cancel</div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ServiceDetailsCard;