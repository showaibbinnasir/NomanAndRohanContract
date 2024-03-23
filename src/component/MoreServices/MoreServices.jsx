import serviceCover from "../../assets/serviceCover.png"
import electricService from "../../assets/electrical.png"
import acMaintenance from "../../assets/acmaintenance.jpg"
import decor from "../../assets/decor.jpeg"
import painting from "../../assets/painting.jpg"
import plumbing from "../../assets/plumbing.png"
import tiles from "../../assets/tiles.jpg"
import Estimate from "../Estimate/Estimate"
import Footer from "../Footer/Footer"
import senitary from "../../assets/senitary.jpg"
import gypsum from "../../assets/gypsum.jpg"
import manpower from "../../assets/manpower.jpg"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
const services = [
    {
        serviceId: 1,
        title: "AC Maintenance",
        background: acMaintenance,
        text: "Experience climate control at its finest with Noman & Rohan General Contracting and Maintenance. Our expert technicians ensure your air conditioning systems run efficiently, keeping your space cool and comfortable."
    }, {
        serviceId: 2,
        title: "Electrical Services",
        background: electricService,
        text: "Illuminate your space with  Noman & Rohan General Contracting and Maintenance’ electrical solutions. From installations to repairs, our skilled electricians guarantee safe and efficient electrical systems for your property."
    }, {
        serviceId: 3,
        title: "Decor Services",
        background: decor,
        text: "For all your odd jobs and repairs, rely on  Noman & Rohan General Contracting and Maintenance’ versatile handyman services. Our skilled professionals tackle a range of tasks, ensuring your property is well-maintained and functional."
    }, {
        serviceId: 4,
        title: "Painting Services",
        background: painting,
        text: "Infuse new life into your property with Noman & Rohan General Contracting and Maintenance’ painting expertise. Our skilled professionals deliver precision and creativity, turning your vision into a vibrant reality."
    }, {
        serviceId: 5,
        title: "Plumbing Services",
        background: plumbing,
        text: "Say goodbye to leaks and plumbing issues with Noman & Rohan General Contracting and Maintenance. Our plumbing experts provide reliable solutions, ensuring your pipes and fixtures function seamlessly."
    }, {
        serviceId: 6,
        title: "Tiles Installation Service",
        background: tiles,
        text: "Elevate your space with expert tile installation. From floors to walls, our meticulous approach guarantees flawless results, enhancing the aesthetic appeal and  durability of your property."
    }, {
        serviceId: 7,
        title: "Sanitary Services",
        background: senitary,
        text: "Infuse new life into your property with Noman & Rohan General Contracting and Maintenance’ sanitary expertise. Our skilled professionals deliver precision and creativity, turning your vision into a vibrant reality."
    }, {
        serviceId: 8,
        title: "Gypsum Services",
        background: gypsum,
        text: "Infuse new life into your property with Noman & Rohan General Contracting and Maintenance’ gypsum expertise. Our skilled professionals deliver precision and creativity, turning your vision into a vibrant reality."
    }, {
        serviceId: 9,
        title: "Man Power",
        background: manpower,
        text: "We are recruitment agency offering staffing, manpower and human resource solutions and services in Abu Dhabi."
    }
]

const MoreServices = () => {
    
    const navigate = useNavigate()
    const navigation = (id) => {
        navigate(`/service/${id}`)
    }
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    document.title = "Services"
    return (
        <div>
            <div>
                <div className="">
                    <img className=" w-[100%] lg:h-[550px] h-[250px] object-cover" src={serviceCover} alt="" />
                </div>
                <div className="lg:mt-[-300px] mt-[-210px]">
                    <div className="flex justify-center">
                        <div>
                            <h1 className="text-white lg:text-4xl text-xl font-semibold text-center">Our Services</h1>
                            <h1 className="text-white lg:w-[850px] w-[350px] lg:text-md text-sm text-justify">Plumbing Services, Electrical Services in Abu Dhabi, Sanitary Maintenance, Painting Services in Abu Dhabi, Tiles Services, Best Maintenance Services in Abu Dhabi, Expert Tradespeople, Gypsum Services, Decor Services, AC Works, Man Power.</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" bg-gradient-to-b from-white from-25% to-[#18335D]">
                        <div className="lg:py-24 py-16 lg:mx-24">
                            <h1 className="text-4xl text-center font-semibold lg:mt-[150px] mt-[60px]">Our Services</h1>
                            <h1 className="text-center text-md text-[#4C81D1]">Please hover on pictures to see details...</h1>
                            <div className="flex justify-center">
                                <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
                                    {
                                        services.map((service, i) => <div key={i} className="card mt-5">

                                            <img className="card-image rounded-lg" src={service.background} alt="" />
                                            <div className="card-body">
                                                <h1 className="card-tile lg:text-2xl text:xl text-white font-semibold">{service.title}</h1>
                                                <h1 className="card-content lg:text-lg text-[10px] text-white lg:my-8 my-2">{service.text}</h1>
                                                <button onClick={() => navigation(service.serviceId)} className="card-button bg-[#4C81D1] lg:w-[150px] w-[110px] rounded-[5px] py-1 text-white">See More</button>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Estimate></Estimate>
            <Footer></Footer>
        </div>
    );
};

export default MoreServices;