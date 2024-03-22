import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"
import Credit from "./Credit";
const Footer = () => {
    return (
        <div>
            <div className="bg-[#1B3C6D] py-8 flex justify-center">
                <div className="flex lg:flex-row flex-col gap-5 justify-evenly">
                    <div className="lg:mx-24 mx-5 flex flex-col"  >
                        <div className="flex">
                            <div className="bg-[white] p-1 rounded-md" >
                                <img className="w-[250px]" src='/logo.png' alt="" />
                            </div>
                        </div>
                        <h1 className="w-[250px] text-white text-sm mt-5">We are here to fit the needs of your
                            maintenance services for your dream
                            building in Abu Dhabi, UAE.</h1>
                        <div className="flex gap-3 mt-5">
                            <a href="https://www.facebook.com/" target="_blank"><img className="w-8" src={facebook} alt="" /></a>
                            <img className="w-8" src={linkedin} alt="" />
                        </div>
                    </div>
                    <div className="w-[300px]">
                        <h1 className="text-2xl text-white my-2">Contact Info</h1>
                        <h1 className="text-white">Abu Dhabi, UAE</h1>
                        <h1 className="text-white font-semibold">+971 05 060 34688</h1>
                        <h1 className="text-white font-semibold">+971  05 591 29049</h1>
                        <h1 className="text-white">nomanrohangcm2022@gmail.com</h1>
                    </div>
                    <div className="">
                        <h1 className="text-2xl text-white mb-2">Quick Links</h1>
                        <div className="text-white flex flex-col">
                            <a href="/">Home</a>
                            <a href="/#details">About Us</a>
                            <a href="/#services">Services</a>
                            <a href="/#contact">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl text-white mb-2">Our Services</h1>

                        <h1 className="text-white">Man-Power</h1>
                        <h1 className="text-white">AC Installation in Abu Dhabi</h1>
                        <h1 className="text-white">Sanitary Services in Abu Dhabi</h1>
                        <h1 className="text-white">Painting Works in Abu Dhabi</h1>
                        <h1 className="text-white">Gypsum Works in Abu Dhabi</h1>
                        <h1 className="text-white">Decor Works in Abu Dhabi</h1>
                        <h1 className="text-white">Tiles Works in Abu Dhabi</h1>
                        <h1 className="text-white">Plumbing Services in Abu Dhabi</h1>
                        <h1 className="text-white">Electrical Works in Abu Dhabi</h1>
                    </div>
                </div>
            </div>
            <Credit></Credit>
        </div>
    );
};

export default Footer;