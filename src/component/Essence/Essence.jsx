import { Link } from "react-router-dom";

const Essence = () => {
    return (
        <div className=" mt-8 bg-[#D1CCCC] p-16">
            <div className="flex justify-center">
                <h1 className="lg:text-4xl md:text-2xl text-xl text-center text-[#2B161B] w-[850px] font-semibold">Reliable & Experienced Maintenance Experts in
                    Dubai, UAE</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 mt-10  lg:mx-24 mx-5">
                <div>
                    <h1 className="lg:text-2xl text-lg font-bold text-[#2B161B] text-center my-3">PROFESSIONAL INSTALLATION</h1>
                    <h1 className="text-justify">Experienced handymen provide all the tools,
                        don’t need manuals and won’t leave you
                        worrying about dangling wires and uneven
                        wall hangings.</h1>
                </div>
                <div>
                    <h1 className="lg:text-2xl text-lg font-bold text-[#2B161B] text-center my-3">PEACE OF MIND</h1>
                    <h1 className="text-justify">With the small jobs taken care of properly you
                        won’t need to worry about them turning into
                        bigger headaches further down the line.</h1>
                </div>
                <div>
                    <h1 className="lg:text-2xl text-lg font-bold text-[#2B161B] text-center my-3">HASSLE-FREE EXPERIENCE</h1>
                    <h1 className="text-justify">Hiring one contractor to get multiple jobs
                        done at once saves you time and puts a final
                        completion date in clear sight.</h1>
                </div>
            </div>
            <div className="lg:mx-24 mx-5 mt-8">
                <h1 className="lg:text-lg text-sm text-center">Call Us Today At <span className="text-[#4C81D1] font-semibold">+971  050 603 6488, +971 055 912 9049</span> We are ready to help 24 hours.</h1>
            </div>
            <div className="mt-5 flex justify-center">
                <Link to='/certificate'><button className="bg-[#4C81D1] lg:w-[200px] w-[180px] rounded-[5px] py-2 text-white">SEE CERTIFICATIONS</button></Link>
            </div>

        </div>
    );
};

export default Essence;