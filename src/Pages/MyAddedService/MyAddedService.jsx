import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyAddedCard from "./MyAddedCard";

const MyAddedService = () => {
    const { user } = useContext(AuthContext);
    const [addedServices, setAddedServices] = useState([]);
    const url = `http://localhost:5000/added-services?service_provider_email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAddedServices(data));

    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you wanna delete?');
        if (proceed) {
            fetch(`http://localhost:5000/services/${id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        alert('deleted successfully')
                        const remaining = addedServices.filter(addService => addService._id !== id);
                        setAddedServices(remaining);
                    }
                })
        }

    }




    console.log(addedServices);
    return (
        <div>
            <div className="mt-[-8px]" style={{ background: 'linear-gradient(to right, #c2e0ff, #f0f0f0)' }}>
                <div className="">
                    <h2 className="text-2xl p-10 text-amber-700 font-bold text-center">Your Added Services To Our Website</h2>

                </div>
                <div className="mx-auto w-3/4 border border-amber-700  border-b-2">
                </div>
            </div>
            {
                addedServices.map(addedService => <MyAddedCard
                    key={addedService._id}
                    addedService={addedService}
                    handleDelete={handleDelete}
                ></MyAddedCard>)
            }

        </div>
    );
};

export default MyAddedService;