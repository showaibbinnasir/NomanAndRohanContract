import ReactWhatsapp from "react-whatsapp";
import call from "../../assets/call.png"
const Estimate = () => {
    return (
        <div className=" bg-[#18335D]">
            <div className="flex justify-center py-10">
                <div className="flex lg:flex-row flex-col gap-2">
                    <div className="lg:w-[550px] w-[350px] flex flex-col justify-center">
                        <h1 className="lg:text-4xl text-3xl font-semibold text-white my-5">Need a free estimate?</h1>
                        <h1 className="text-white text-sm text-justify">As a leading home maintenance Services in Dubai, We clear out your maintenance problems and any other services requirements on a timely basis. Feel free to contact us.</h1>
                        <div className="mt-5">
                            <div className="flex gap-2">
                                <a href="/#contact"><button className="bg-[#4C81D1] lg:w-[150px] w-[140px] rounded-[5px] py-2 text-white">Get A Quote</button></a>
                                <button className="bg-[#18335D] lg:w-[150px] w-[140px] rounded-[5px] py-2 text-white border border-white"><ReactWhatsapp number="+8801880614408" message="Hello, i got your number from Noman and Rohan Contracting and Maintenance Website. Can you help me?"> Whatsapp</ReactWhatsapp></button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <img className="lg:w-[450px] w-[350px]" src={call} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estimate;