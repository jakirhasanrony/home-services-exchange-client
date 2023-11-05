import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="my-56 m-6 flex justify-center items-center ">

            <div className="card w-[80vw] h-[60vh] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/C9wZCDs/error-text-broken-glass-font.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-3xl md:text-4xl text-gray-600 mb-5 ">Error Detected!</h2>

                    <div className="card-actions">
                        <Link to="/"><button className="btn btn-primary">Go Home Page Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;