

const MemberPortrait = () => {
    return (
        <div>
            <div className="w-3/4  p-6 mt-10 mx-auto">
                <div className=" mb-8">
                    <h2 className="text-2xl text-amber-700 font-bold text-center">Member Portrait</h2>

                </div>
                <div className=" mb-8 mx-auto w-1/12 border border-[#cee3db] border-b-2">
                </div>
                <p className="text-center mx-auto">Our Member Portrait series highlights members of the Home Services Exchange Collection community; their families, their homes, and the unique experiences they have enjoyed while exchanging services for their homes.</p>
            </div>
            <div className=" mt-4 shadow-lg mx-auto p-8  grid grid-cols-1 justify-center items-center" >
                <div>
                    <div className=" flex flex-wrap justify-center items-center ">
                        <div >

                            <div className="hero-content  flex-col lg:flex-row">
                                <img src="https://i.ibb.co/Z6GtGCf/cropped-family-enjoying-nature.jpg" className="max-w-sm rounded-lg shadow-2xl " />
                                <div className="ml-3 grid grid-cols-1 ">
                                    <h1 className="text-3xl  font-bold">Anderson Family - Denver, Colorado</h1>
                                    <p className="py-2">For five years, Mr. Anderson and his family have welcomed members of the Home Services Exchange community to their Denver home. In exchange for their hospitality, this family of six has ventured all over the world to other members’ homes, giving them the opportunity to live like locals and even make friends along the way. </p>
                                    <button className="btn mt-2 btn-block bg-[#cee3db] text-black font-bold">See Details </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center ">
                        <div >
                            <div className="hero-content flex-col lg:flex-row">
                                <div className="ml-3">
                                    <h1 className="text-3xl  font-bold">Johnson Family -  San Francisco, California</h1>
                                    <p className="py-2">For five years, Mr. Johnson and his family have welcomed members of the Home Services Exchange community to their Denver home. In exchange for their hospitality, this family of six has ventured all over the world to other members’ homes, giving them the opportunity to live like locals and even make friends along the way. </p>
                                    <button className="btn mt-2 btn-block bg-[#cee3db] text-black font-bold">See Details </button>

                                </div>
                                <img src="https://i.ibb.co/J74P8kj/cropped-group-diverse-friends-taking-photo-together.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberPortrait;