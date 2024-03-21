import group from "../../assets/group.png"
import tick from "../../assets/tick.png"

const Assists = () => {
    return (
        <div className="flex justify-center mt-5">
            <div className="flex lg:flex-row flex-col-reverse items-center gap-10">
                <div>
                    <img className="lg:w-[470px] w-[350px]" src={group} alt="" />
                </div>
                <div className="flex items-center lg:w-[650px] md:w-[650px] w-[350px]">
                    <div>
                        <h1 className="text-4xl font-semibold my-5">How Can We Assist You?</h1>
                        <h1 className=" text-sm text-justify">For a comprehensive range of services, entrust Noman & Rohan General Contracting and Maintenance to handle everything from air conditioning units to plumbing, electrics and more.</h1>
                        <h1 className="my-5 text-sm text-justify">With an average of over 10 years of expertise in the region, our dedicated
                            technicians extend their skills across all major communities in Abu Dhabi, UAE. Anticipate not only high-quality results but also professional support and a hassle-free journey when you choose Noman & Rohan General Contracting and Maintenance as your go-to service provider.</h1>
                        <h1 className=" text-sm text-justify">Our commitment to excellence ensures your satisfaction, promising you a
                            stress-free experience throughout your maintenance needs. Rest easy as
                            Noman & Rohan General Contracting and Maintenance becomes your trusted partner in maintaining the integrity and functionality of your property</h1>
                        <div className="flex flex-col gap-1 mt-5">
                            <div className="flex gap-2">
                                <img className="w-[8]" src={tick} alt="" />
                                <h1 className="text-sm">Best in the Market</h1>
                            </div>
                            <div className="flex gap-2">
                                <img className="w-[8]" src={tick} alt="" />
                                <h1 className="text-sm">Highly Experienced Technicians</h1>
                            </div>
                            <div className="flex gap-2">
                                <img className="w-[8]" src={tick} alt="" />
                                <h1 className="text-sm">Individual Services and AMCs</h1>
                            </div>
                            <div className="flex gap-2">
                                <img className="w-[8]" src={tick} alt="" />
                                <h1 className="text-sm">Operating 7 days/week: from 8am – 8pm</h1>
                            </div>
                            <div className="flex gap-2">
                                <img className="w-[8]" src={tick} alt="" />
                                <h1 className="text-sm">Available 24/7, 365 days a year</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assists;