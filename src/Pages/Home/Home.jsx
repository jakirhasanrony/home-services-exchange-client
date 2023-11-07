import { useEffect, useState } from "react";
import PopularServices from "./PopularServices/PopularServices";
import ServicesFeatureSection from "./ServicesFeatureSection/ServicesFeatureSection";
import Slider from "./Slider/Slider";
import ServiceCard from "./ServiceCard/ServiceCard";

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const firstFourServices = services.slice(0, 4);




    return (
        <div className="bg-gray-100 pb-6">
            <Slider></Slider>
            <ServicesFeatureSection></ServicesFeatureSection>
            <PopularServices></PopularServices>
            <div className="m-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                {
                    firstFourServices.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    > </ServiceCard>)
                }
            </div>
            <div className="flex justify-center items-center">
                {/* <button className="btn bg-black w-1/2  ">block</button> */}
                <button className="btn btn-outline bg-black text-white w-1/2 ">Show All Services</button>
            
            </div>

        </div>

    );
};

export default Home;