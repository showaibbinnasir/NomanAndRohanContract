"use client";
import { Carousel } from "keep-react";
import carousalOne from "../../assets/carousalOne.png"
import carousalTwo from "../../assets/carousalTwo.png"
import "./Bannersection.css"
import BannerContent from "./BannerContent";
import Features from "./Features";
const Bannersection = () => {
    return (
        <div>
            <Carousel indicatorsType="" indicators={true} className="customSlider">
                <img className=" object-cover" src={carousalOne} alt="slider-1" />
                <img className=" object-cover" src={carousalTwo} alt="slider-2" />
                <img className=" object-cover" src={carousalOne} alt="slider-3" />
                <img className=" object-cover" src={carousalTwo} alt="slider-4" />
            </Carousel>
            <BannerContent></BannerContent>
            <Features></Features>
        </div>
    );
};

export default Bannersection;