import { useNavigate } from "react-router-dom";
import electricService from "../assets/electrical.png"
import acMaintenance from "../assets/acmaintenance.jpg"
import decor from "../assets/decor.jpeg"
import painting from "../assets/painting.jpg"
import plumbing from "../assets/plumbing.png"
import tiles from "../assets/tiles.jpg"
import './Services.css'

const services = [
    {
        id: 1,
        title: "AC Maintenance",
        background: acMaintenance,
        text: "Experience climate control at its finest with Noman & Rohan General Contracting and Maintenance. Our expert technicians ensure your air conditioning systems run efficiently, keeping your space cool and comfortable."
    }, {
        id: 2,
        title: "Electrical Services",
        background: electricService,
        text: "Illuminate your space with  Noman & Rohan General Contracting and Maintenance’ electrical solutions. From installations to repairs, our skilled electricians guarantee safe and efficient electrical systems for your property."
    }, {
        id: 3,
        title: "Decor Services",
        background: decor,
        text: "For all your odd jobs and repairs, rely on  Noman & Rohan General Contracting and Maintenance’ versatile handyman services. Our skilled professionals tackle a range of tasks, ensuring your property is well-maintained and functional."
    }, {
        id: 4,
        title: "Painting Services",
        background: painting,
        text: "Infuse new life into your property with Noman & Rohan General Contracting and Maintenance’ painting expertise. Our skilled professionals deliver precision and creativity, turning your vision into a vibrant reality."
    }, {
        id: 5,
        title: "Plumbing Services",
        background: plumbing,
        text: "Say goodbye to leaks and plumbing issues with Noman & Rohan General Contracting and Maintenance. Our plumbing experts provide reliable solutions, ensuring your pipes and fixtures function seamlessly."
    }, {
        id: 6,
        title: "Tiles Installation Service",
        background: tiles,
        text: "Elevate your space with  Noman & Rohan General Contracting and Maintenance’ expert tile installation. From floors to walls, our meticulous approach guarantees flawless results, enhancing the aesthetic appeal and  durability of your property."
    },
]

const Services = () => {
    const navigate = useNavigate()
    const navigateRoute = () => {
        navigate('/services')
    }
    return (
        <div>
            <div id="services" className=" bg-gradient-to-b from-white from-25% to-[#18335D]">
                <div className="lg:py-24 py-16 lg:mx-24">
                    <h1 className="text-4xl text-center font-semibold">Our Services</h1>
                    <h1 className="text-center text-md text-[#4C81D1]">Please hover on pictures to see details...</h1>
                    <div className="flex justify-center">
                        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
                            {
                                services.map((service, i) => <div key={i} className="card mt-5">

                                    <img className="card-image rounded-lg" src={service.background} alt="" />
                                    <div className="card-body">
                                        <h1 className="card-tile lg:text-2xl text:xl text-white font-semibold">{service.title}</h1>
                                        <h1 className="card-content lg:text-lg text-[10px] text-white lg:my-8 my-2">{service.text}</h1>
                                        <button onClick={()=>alert(`${service.title}`)} className="card-button bg-[#4C81D1] lg:w-[150px] w-[110px] rounded-[5px] py-1 text-white">See More</button>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center mt-[-25px]">
                <button onClick={()=>navigateRoute()} className="card-button bg-white lg:w-[350px] w-[250px] rounded-[5px] py-3 text-[#4C81D1] drop-shadow-md">See More</button>
            </div>
        </div>
    );
};

export default Services;