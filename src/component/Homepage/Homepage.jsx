import Services from "../../Services/Services";
import About from "../About/About";
import Bannersection from "../Bannersection/Bannersection";
import Details from "../Bannersection/Details";

const Homepage = () => {
    return (
        <div>
            <Bannersection></Bannersection>
            <Details></Details>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Homepage;