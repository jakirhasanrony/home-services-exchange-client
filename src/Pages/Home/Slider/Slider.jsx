
const Slider = () => {
    return (

        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5r2WRxs/cropped-3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg" className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#c2e0ff] to-[#f0f0f0)]">
                        <div className="space-y-5">
                            <h2 className="text-2xl md:text-3xl lg:text-6xl mx-auto text-center font-bold w-1/2">HomeHelpHub: Your One-Stop Home Services Exchange </h2>
                            <h2 className="text-2xl md:text-3xl lg:text-6xl mx-auto text-pink-600 text-center font-bold w-1/2">`Interior Design and Decor` </h2>
                            <p className="w-1/2 mx-auto font-bold md:text-xl text-center">We provide a user-friendly platform that effortlessly links homeowners with service providers, streamlining the process of finding and hiring professionals for a wide range of home solutions</p>
                            {/* <div>
                                <button className="btn btn-secondary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
                        <a href="#slide4" className="btn bg-black text-white btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn bg-black text-white btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/b1dXwrH/cropped-man-cleaning-window.jpg" className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#c2e0ff] to-[#f0f0f0)]">
                        <div className="space-y-5">
                            <h2 className="text-2xl md:text-3xl lg:text-6xl mx-auto text-center font-bold w-1/2">HomeHelpHub: Your One-Stop Home Services Exchange </h2>
                            <h2 className="text-2xl md:text-3xl lg:text-6xl mx-auto text-pink-600 text-center font-bold w-1/2">`Cleaning and Organization` </h2>
                            <p className="w-1/2 mx-auto font-bold md:text-xl text-center">We provide a user-friendly platform that effortlessly links homeowners with service providers, streamlining the process of finding and hiring professionals for a wide range of home solutions</p>
                            {/* <div>
                                <button className="btn btn-secondary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
                        <a href="#slide1" className="btn bg-black text-white btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn bg-black text-white btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/DzQ8gYJ/cropped-top-view-gardening-tools-plants-23-2148175909.jpg" className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#c2e0ff] to-[#f0f0f0)]">
                        <div className="space-y-5">
                            <h2 className="text-2xl md:text-3xl lg:text-6xl mx-auto text-center font-bold w-1/2">HomeHelpHub: Your One-Stop Home Services Exchange </h2>
                            <h2 className="text-2xl md:text-3xl lg:text-6xl mx-auto text-pink-600 text-center font-bold w-1/2">`Gardening and Landscaping` </h2>
                            <p className="w-1/2 mx-auto font-bold md:text-xl text-center">We provide a user-friendly platform that effortlessly links homeowners with service providers, streamlining the process of finding and hiring professionals for a wide range of home solutions</p>
                            {/* <div>
                                <button className="btn btn-secondary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
                        <a href="#slide2" className="btn bg-black text-white btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn bg-black text-white btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/v1xGRtG/cropped-doctor-taking-care-senior-woman-home-23-2148962375.jpg" className="w-full rounded-lg" />
                    <div className="absolute rounded-lg flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#c2e0ff] to-[#f0f0f0)]">
                        <div className="space-y-5">
                            <h2 className="text-2xl md:text-3xl lg:text-6xl mx-auto text-center font-bold w-1/2">HomeHelpHub: Your One-Stop Home Services Exchange </h2>
                            <h2 className="text-2xl md:text-3xl lg:text-6xl mx-auto text-pink-600 text-center font-bold w-1/2">`Elderly and Disability Assistance` </h2>
                            <p className="w-1/2 mx-auto font-bold md:text-xl text-center">We provide a user-friendly platform that effortlessly links homeowners with service providers, streamlining the process of finding and hiring professionals for a wide range of home solutions</p>
                            {/* <div>
                                <button className="btn btn-secondary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 justify-end bottom-0">
                        <a href="#slide3" className="btn bg-black text-white  btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn bg-black text-white btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;