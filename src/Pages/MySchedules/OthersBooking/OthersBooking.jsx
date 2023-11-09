import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const OthersBooking = ({ otherBooking }) => {
    const { user } = useContext(AuthContext);
    console.log(user?.displayName);
    const { service_name, service_image, service_price, date, service_provider_img } = otherBooking;

    const [selectedStatus, setSelectedStatus] = useState("Pending");

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setSelectedStatus(newStatus);

        // Update the service status in the database (you need to implement this)
        // You would typically make an API call to update the status in your database.
        // For the sake of this example, let's assume you have an updateStatus function.
        updateStatus(otherBooking.id, newStatus);
    };

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3 p-6">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={service_image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {service_name}
            </td>
            <td>{service_price}</td>
            <td>{date}</td>
            {/* <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={service_image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td> */}
            <td>
                <select className="p-3 rounded-lg" value={selectedStatus} onChange={handleStatusChange}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </td>

        </tr>


    );
};


export default OthersBooking;