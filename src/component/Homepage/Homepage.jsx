import { useEffect, useState } from "react";
import Services from "../../Services/Services";
import About from "../About/About";
import AboutBanner from "../About/AboutBanner";
import Assists from "../Assists/Assists";
import Bannersection from "../Bannersection/Bannersection";
import Details from "../Bannersection/Details";
import CallbackForm from "../CallbackForm/CallbackForm";
import Essence from "../Essence/Essence";
import Estimate from "../Estimate/Estimate";
import Footer from "../Footer/Footer";
import SmoothScroll from "../SmoothScroll/SmoothScroll"
import Stats from "../Stats/Stats";
import ClipLoader from "react-spinners/ClipLoader";

const Homepage = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div>
            {
                loading ? <div className="flex justify-center mt-[100px]"><ClipLoader size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader" /></div> : <div>
                    <Bannersection></Bannersection>
                    <Details></Details>
                    <Services></Services>
                    <About></About>
                    <AboutBanner></AboutBanner>
                    <Stats></Stats>
                    <Assists></Assists>
                    <Essence></Essence>
                    <Estimate></Estimate>
                    <CallbackForm></CallbackForm>
                    <Footer></Footer>
                    <SmoothScroll></SmoothScroll>
                </div>
            }
        </div>
    );
};

export default Homepage;