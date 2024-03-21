import Services from "../../Services/Services";
import About from "../About/About";
import AboutBanner from "../About/AboutBanner";
import Assists from "../Assists/Assists";
import Bannersection from "../Bannersection/Bannersection";
import Details from "../Bannersection/Details";
import SmoothScroll from "../SmoothScroll/SmoothScroll"
import Stats from "../Stats/Stats";

const Homepage = () => {
    return (
        <div>
            <Bannersection></Bannersection>
            <Details></Details>
            <Services></Services>
            <About></About>
            <AboutBanner></AboutBanner>
            <Stats></Stats>
            <Assists></Assists>
            <SmoothScroll></SmoothScroll>
        </div>
    );
};

export default Homepage;