import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";
import Swal from "sweetalert2";


const ServiceDetailsCard = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const singleService = useLoaderData();
    const { _id, service_image, service_name, service_description, service_provider_img, service_provider_name, service_area, service_price, service_provider_email } = singleService;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);


    const openModal = () => {
        console.log('clicked');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleAddService = event => {

        event.preventDefault();

        const form = event.target;

        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const service_provider_email = form.service_provider_email.value;
        const email = form.user_email.value;
        const service_price = form.service_price.value;
        const date = form.date.value;
        const instruction = form.instruction.value;



        const newService = { service_name, service_image, service_provider_email, email, service_price, date, instruction, service_provider_img }
        console.log(newService);

        // send data to the server
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // Swal.fire({
                    //     title: 'Success!',
                    //     text: 'Thank you for purchasing',
                    //     icon: 'success',
                    //     confirmButtonText: 'Cool'
                    // })
                    setShowSuccessAlert(true);

                }
                form.reset();

            })


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
                                    <button className="btn mt-2 btn-block bg-[#cee3db] text-black font-bold" onClick={() => document.getElementById('my_modal_4').showModal()}>Book Now</button>
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

            {/* Modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button> */}
            <dialog id="my_modal_4" className="modal">
                <div className="card mt-40 p-24 w-3/4 mx-auto my-10 bg-base-100 shadow-xl " style={{ background: 'linear-gradient(to right, #c2e0ff, #f0f0f0)' }}>
                    <div className="  ">
                        <h2 className="text-xl md:text-3xl text-center pb-10 font-extrabold">Purchase This Service</h2>
                        <form onSubmit={handleAddService}>
                            {/* service name and image row */}
                            <div className="md:flex mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input name="service_name" value={service_name} type="text" required placeholder="enter service name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ml-0 md:ml-4">
                                    <label className="label">
                                        <span className="label-text">Service Image</span>
                                    </label>
                                    <label className="input-group">
                                        <input name="service_image" value={service_image} type="text" required placeholder=
                                            "enter service image url here" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>

                            {/* service provider email and user email row */}
                            <div className="md:flex mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <label className="input-group">
                                        <input name="user_email" type="text" required placeholder="enter user email" value={user?.email} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ml-0 md:ml-4">
                                    <label className="label">
                                        <span className="label-text">Provider Email</span>
                                    </label>
                                    <label className="input-group">
                                        <input name="service_provider_email" type="text" required placeholder=
                                            "enter service image url here" value={service_provider_email} className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/*  price and date row */}
                            <div className="md:flex mb-8">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Service Price</span>
                                    </label>
                                    <label className="input-group">
                                        <input name="service_price" value={service_price} type="text" required placeholder="enter the price of the service" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control md:w-1/2 ml-0 md:ml-4">
                                    <label className="label">
                                        <span className="label-text">Service Taking Date</span>
                                    </label>
                                    <label className="input-group">
                                        <input name="date" type="date" required placeholder="enter the date on which you want this service" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/* special instruction row */}
                            <div className="mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Special Instruction</span>
                                    </label>
                                    <label className="input-group">
                                        <input name="instruction" type="text" required placeholder="enter any suggestion: anything like address, area, customized service plan" className="input input-bordered w-full" />
                                    </label>
                                </div>

                            </div>
                            <input className="btn btn-block text-black font-bold bg-[#cee3db] " type="submit" value="Purchase This Service" />
                        </form>
                    </div>
                    <div className=" w-full">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn  btn-block text-black font-bold bg-[#cee3db] " >Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {showSuccessAlert && (
                <div className="sweet-alert-popup" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999, background: 'white', padding: '20px', border: '1px solid #ccc', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                    <h3 style={{ color: 'green', textAlign: 'center' }}>Success!</h3>
                    <p style={{ textAlign: 'center' }}>Thank you for purchasing</p>
                    <button onClick={() => setShowSuccessAlert(false)}>OK</button>
                </div>
            )}


        </>
    );
};

export default ServiceDetailsCard;