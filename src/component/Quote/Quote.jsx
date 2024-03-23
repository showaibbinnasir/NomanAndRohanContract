import { useEffect } from "react";
import CallbackForm from "../CallbackForm/CallbackForm";

import Estimate from "../Estimate/Estimate";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const Quote = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    document.title = `Get a Quote`
    return (
        <div>
            <Estimate></Estimate>
            <CallbackForm></CallbackForm>
            <Footer></Footer>
        </div>
    );
};

export default Quote;