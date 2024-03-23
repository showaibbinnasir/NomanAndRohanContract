import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Estimate from "../Estimate/Estimate";
import Footer from "../Footer/Footer";

const ServiceDetails = () => {
    const data = useLoaderData()
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    document.title = `${data[0].banner.bannerTitle}`
    return (
        <div>
            <div>
                <img className=" w-[100%] lg:h-[550px] h-[250px] object-cover" src={data[0].banner.bannerCover} alt="" />
            </div>
            <div className="lg:mt-[-350px] mt-[-230px]">
                <div className="flex justify-center">
                    <div>
                        <h1 className="text-white lg:text-4xl text-xl font-semibold text-center">{data[0].banner.bannerTitle}</h1>
                        <h1 className="text-white lg:w-[850px] w-[350px] lg:mt-5 mt-2 lg:text-md text-sm text-justify">{data[0].banner.bannerContent}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-10">
                <div className="lg:mt-[250px] mt-[50px] lg:mx-24 mx-5 flex lg:flex-row flex-col gap-10">
                    <img className="lg:w-[450px] w-[350]" src={data[0].sectionOne.cover} alt="" />
                    <div className="lg:w-[650px] w-[350px] flex flex-col justify-center">
                        <h1 className="lg:text-4xl text-xl font-semibold"> {data[0].sectionOne.title}</h1>
                        <h1 className="lg:text-md text-sm mt-5 text-justify"> {data[0].sectionOne.content}</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-10 bg-[#BBC3CF]">
                <div className="lg:mx-24 mx-5 flex lg:flex-row flex-col gap-10">
                    
                    <div className="lg:w-[650px] w-[350px] flex flex-col justify-center">
                        <h1 className="text-4xl font-semibold"> {data[0].sectionTwo.title}</h1>
                        <h1 className="text-md mt-5 text-justify"> {data[0].sectionTwo.content}</h1>
                    </div>
                    <img className="lg:w-[450px] w-[350px]" src={data[0].sectionTwo.cover} alt="" />
                </div>
            </div>
            <Estimate></Estimate>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;