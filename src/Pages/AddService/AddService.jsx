
import Swal from 'sweetalert2'
const AddService = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;


        const newProduct = { service_name, service_image, brand, type, price, details, rating }
        console.log(newProduct);

        // send data to the server
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
                form.reset()

            })


    }

    return (
        <div className="card p-24 max-w-5xl mx-auto my-10 bg-base-100 shadow-xl " style={{ background: 'linear-gradient(to right, #c2e0ff, #f0f0f0)' }}>
            <div className="  ">
                <h2 className="text-xl md:text-3xl text-center pb-10 font-extrabold">Add Service Here</h2>
                <form onSubmit={handleAddProduct}>
                    {/* service name and image row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <label className="input-group">
                                <input name="service_name" type="text" required placeholder="enter service name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">
                                <span className="label-text">Service Image</span>
                            </label>
                            <label className="input-group">
                                <input name="service_image" type="text" required placeholder=
                                    "enter service image url here" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form brand name and type of product row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <label className="input-group">
                                <input name="service_name" type="text" required placeholder="enter service name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">
                                <span className="label-text">Service Image</span>
                            </label>
                            <label className="input-group">
                                <input name="service_image" type="text" required placeholder=
                                    "enter service image url here" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form price and short description row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <label className="input-group">
                                <input name="price" type="text" required placeholder="enter the price of product" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-0 md:ml-4">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input name="details" type="text" required placeholder="enter the description of the product" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form ratings row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating </span>
                            </label>
                            <label className="input-group">
                                <input name="rating" type="text" required placeholder="enter the ratings out of 5" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <input className="btn btn-block bg-black text-white" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddService;