
const MyBookingsRow = ({ booking }) => {
    const { service_name, service_image, service_price, date, service_provider_img } = booking;
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
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={service_provider_img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            
        </tr>


    );
};

export default MyBookingsRow;