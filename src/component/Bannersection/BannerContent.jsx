import ReactWhatsapp from "react-whatsapp";

const BannerContent = () => {
    return (
        <div className="flex justify-center lg:mt-[-350px] md:mt-[-350px] mt-[-270px] z-99999">
            <div>
                <h1 style={{
                    textShadow: '2px 2px 2px #000000'
                }} className="lg:text-4xl md:text-2xl text-center text-xl text-white font-semibold">Enjoy Hassle-free Maintenance</h1>
                <h1 style={{
                    textShadow: '2px 2px 2px #000000'
                }} className="text-white lg:w-[950px] md:w-[650px] w-[300px] text-center lg:text-[16px] text-[12px] mt-2">We offer Handyman, plumbing, electrical, Pool Cleaning & Maintenance, Home Renovation, Fitouts, Extension, Bathroom Renovation, Pool Cover & Fence installation,
                    Sofa & Carpet Cleaning, painting and more .</h1>
                <div className="flex justify-center mt-2">
                    <div className="flex gap-2">
                        <a href="/#contact"><button className="bg-[#18335D] lg:w-[150px] w-[110px] rounded-[5px] py-2 text-white border border-white">Get A Quote</button></a>
                        <button className="bg-[#18335D] lg:w-[150px] w-[110px] rounded-[5px] py-2 text-white border border-white"><ReactWhatsapp number="+971506036488" message="Hello, i got your number from Noman and Rohan Contracting and Maintenance Website. Can you help me?"> Whatsapp</ReactWhatsapp></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerContent;