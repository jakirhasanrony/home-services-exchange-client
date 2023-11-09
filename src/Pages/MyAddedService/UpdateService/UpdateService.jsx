import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Helmet } from "react-helmet";

const UpdateService = () => {
    const singleService = useLoaderData();
    const { user } = useContext(AuthContext);


    const { _id, service_image, service_name, service_description, service_provider_img, service_provider_name, service_area, service_price, service_provider_email } = singleService;



    const handleUpdateService = event => {

        event.preventDefault();

        const form = event.target;

        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const service_provider_name = form.service_provider_name.value;
        const service_provider_email = form.service_provider_email.value;
        const service_price = form.service_price.value;
        const service_area = form.service_area.value;
        const service_description = form.service_description.value;
        const service_provider_img = user?.photoURL;
        const newService = { service_name, service_image, service_provider_name, service_provider_email, service_price, service_area, service_description, service_provider_img }
        console.log(newService);

        // send data to the server
        fetch(`https://home-services-exchange-server.vercel.app/services/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset()

            })


    }

    return (
        <>
         <Helmet>
                <meta charSet='utf-8' />
                <title>HomeHelpHub | UpdateService</title>
            </Helmet>
            <div className=" mt-[-8px] p-24 w-full mx-auto bg-base-100 shadow-xl " style={{ background: 'linear-gradient(to right, #c2e0ff, #f0f0f0)' }}>
                <div className="  ">
                    <h2 className="text-xl md:text-3xl text-center pb-10 font-extrabold">Update Service Here</h2>
                    <form onSubmit={handleUpdateService}>
                        {/* service name and image row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <label className="input-group">
                                    <input name="service_name" defaultValue={service_name} type="text" required placeholder="enter service name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-0 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Service Image</span>
                                </label>
                                <label className="input-group">
                                    <input name="service_image" defaultValue={service_image} type="text" required placeholder=
                                        "enter service image url here" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* service provider name and email row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Provider Name</span>
                                </label>
                                <label className="input-group">
                                    <input name="service_provider_name" type="text" required placeholder="enter service provider name" value={user?.displayName} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-0 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Provider Email</span>
                                </label>
                                <label className="input-group">
                                    <input name="service_provider_email" type="text" required placeholder=
                                        "enter service image url here" value={user?.email} className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/*  price and short description row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Service Price</span>
                                </label>
                                <label className="input-group">
                                    <input name="service_price" defaultValue={service_price} type="text" required placeholder="enter the price of the service" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-0 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Service Area</span>
                                </label>
                                <label className="input-group">
                                    <input name="service_area" defaultValue={service_area} type="text" required placeholder="enter the area of the service" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* description row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Service Description </span>
                                </label>
                                <label className="input-group">
                                    <input name="service_description" defaultValue={service_description} type="text" required placeholder="enter the description of the service" className="input input-bordered w-full" />
                                </label>
                            </div>

                        </div>
                        <input className="btn btn-block text-black font-bold bg-[#cee3db] " type="submit" value="Update Service" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateService;