import { useEffect, useState } from "react";

import AllServiceCard from "./AllServiceCard/AllServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);
    const [displayedServices, setDisplayedServices] = useState(6);
    const [showAllServices, setShowAllServices] = useState(false);
    const [query, setQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {
        const temp = services.filter(service => {
            return service?.service_name.toLowerCase().includes(query.toLocaleLowerCase());
        })
        setFilteredServices(temp)
    }, [query, services]);

    const handleShowAllServices = () => {
        setDisplayedServices(services.length);
        setShowAllServices(true);
    };

    return (
        <div className="my-10">
            <div className="container mx-auto rounded-lg h-[100px] bg-green-100 flex justify-center items-center">
                <input value={query} onChange={e => setQuery(e.target.value)} className="w-[800px] py-3 px-4 rounded-lg focus:outline-none" type="text" placeholder="Search" />
            </div>
            <div className="m-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                {
                    filteredServices.slice(0, displayedServices).map(service => <AllServiceCard
                        key={service._id}
                        service={service}
                    > </AllServiceCard>)
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