import Services from "../../Services/Services";
import About from "../About/About";
import AboutBanner from "../About/AboutBanner";
import Assists from "../Assists/Assists";
import Bannersection from "../Bannersection/Bannersection";
import Details from "../Bannersection/Details";
import Essence from "../Essence/Essence";
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
            <Essence></Essence>
            <SmoothScroll></SmoothScroll>
        </div>
    );
};

export default Homepage;