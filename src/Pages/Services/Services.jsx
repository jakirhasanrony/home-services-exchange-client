import { useEffect, useState } from "react";
import ServiceCard from "../Home/ServiceCard/ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);
    const [displayedServices, setDisplayedServices] = useState(4); 
    const [showAllServices, setShowAllServices] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleShowAllServices = () => {
        setDisplayedServices(services.length);
        setShowAllServices(true);
    };

    return (
        <div className="my-10">
           
            <div className="m-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                {
                    services.slice(0, displayedServices).map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    > </ServiceCard>)
                }
            </div>
            {!showAllServices && services.length > displayedServices && (
                <div className="text-center">
                    <button
                        onClick={handleShowAllServices}
                        className="btn btn-outline bg-black text-white w-1/2"
                    >
                        More Services
                    </button>
                </div>
            )}
        </div>
    );
};

export default Services;