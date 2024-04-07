import CallbackForm from "../CallbackForm/CallbackForm";
import Estimate from "../Estimate/Estimate";
import Footer from "../Footer/Footer";
import vat from "../../assets/vatcertificate.jpg"
import corOne from "../../assets/corporate.jpg"
import corTwo from "../../assets/corporate2.jpg"

const Certifications = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 id="contact" className="text-4xl text-black font-semibold text-center">Company Certifications</h1>
                    <h1 className="text-black text-center my-5">Attached our VAT Registration Certificate and Corporate TAX Certificate</h1>
                </div>
                <div>
                    <h1 id="contact" className="text-2xl text-black font-semibold text-center">VAT Registration Certificate</h1>
                    <div className="flex justify-center mt-5">
                        <img src={vat} alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="contact" className="text-2xl my-5 text-black font-semibold text-center">Corporate TAX Certificate</h1>
                    <div className="flex lg:flex-row flex-col justify-center mt-5">
                        <img src={corOne} alt="" />
                        <img src={corTwo} alt="" />
                    </div>
                </div>
            </div>
            <Estimate></Estimate>
            <CallbackForm></CallbackForm>
            <Footer></Footer>
        </div>
    );
};

export default Certifications;