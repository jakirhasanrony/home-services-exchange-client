import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyBookingsRow from "./MyBookings/MyBookingsRow";
import OthersBooking from "./OthersBooking/OthersBooking";
import { Helmet } from "react-helmet";

const MySchedules = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [othersBookings, setOthersBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const url2 = `http://localhost:5000/other-bookings?service_provider_email=${user?.email}`;
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setBookings(data));

        fetch(url2)
            .then(res => res.json())
            .then(data => setOthersBookings(data));

    }, [url, url2])
    console.log(user?.service_provider_email);
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>HomeHelpHub | MySchedules</title>
            </Helmet>
            <div className="mx-auto">

                <div>
                    <div className="mt-[-8px]" style={{ background: 'linear-gradient(to right, #c2e0ff, #f0f0f0)' }}>
                        <div className="">
                            <h2 className="text-2xl p-10 text-amber-700 font-bold text-center">Your Booked Services</h2>

                        </div>
                        <div className="mb-8 mx-auto w-1/12 border border-amber-700  border-b-2">
                        </div>
                        <div>
                            <div className="overflow-x-auto">
                                {bookings.length === 0 ? (
                                    <p className="font-extrabold text-3xl text-center my-48">No bookings available</p>
                                ) : (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                {/* <th>Service Image</th> */}
                                                <th>Service Name</th>
                                                <th>Service Price</th>
                                                <th>Date</th>
                                                <th>Service Provider</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map(booking => (
                                                <MyBookingsRow
                                                    key={booking._id}
                                                    booking={booking}
                                                ></MyBookingsRow>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


                {/* my pending services from others users */}

                <div>
                    <div className="mt-[-8px]" style={{ background: 'linear-gradient(to right, #c2e0ff, #f0f0f0)' }}>
                        <div className="">
                            <h2 className="text-2xl p-10 text-amber-700 font-bold text-center">My Pending Services</h2>

                        </div>
                        <div className="mb-8 mx-auto w-1/12 border border-amber-700  border-b-2">
                        </div>
                        <div>
                            <div className="overflow-x-auto">
                                {othersBookings.length === 0 ? (
                                    <p className="font-extrabold text-3xl text-center my-48">No one booked your services.</p>
                                ) : (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Service Image</th>
                                                {/* <th>Service Name</th> */}
                                                <th>Service Price</th>
                                                <th>Date</th>
                                                {/* <th>Service Provider</th> */}
                                                <th>Service Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                othersBookings.map(otherBooking => <OthersBooking
                                                    key={otherBooking._id}
                                                    otherBooking={otherBooking}
                                                ></OthersBooking>)
                                            }
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySchedules;