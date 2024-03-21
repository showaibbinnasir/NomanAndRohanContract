import aboutBanner from "../../assets/aboutBanner.png";

const AboutBanner = () => {
    return (
        <div>
            <img className="w-[100%] lg:h-[350px] h-[100px] object-cover" src={aboutBanner} alt="" />
        </div>
    );
};

export default AboutBanner;