"use client";

import { Navbar } from "keep-react";
import ReactWhatsapp from "react-whatsapp";
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate()
    const navigation = () => {
        navigate("/quote")
    }
    return (
        <>
            <div className=" sticky top-0 z-[999999]">
                <Navbar fluid={true}>
                    <Navbar.Container className="flex items-center justify-between lg:mx-24">
                        <Navbar.Container className="flex items-center">
                            <Navbar.Brand>
                                <img className="w-[150px]" src={logo} />
                            </Navbar.Brand>
                            <Navbar.Divider></Navbar.Divider>
                            <Navbar.Container
                                tag="ul"
                                className="lg:flex hidden items-center justify-between gap-8"
                            >
                                {/* <Navbar.Link linkName="Home"  />
                                <Navbar.Link linkName="About Us" />
                                <Navbar.Link linkName="Sevices" />
                                <Navbar.Link linkName="Contact" /> */}
                                <a className='text-md font-semibold' href="/">Home</a>
                                <a className='text-md font-semibold' href="/#details">About Us</a>
                                <a className='text-md font-semibold' href="/#services">Services</a>
                                <a className='text-md font-semibold' href="/#contact">Contact</a>
                            </Navbar.Container>
                            <Navbar.Collapse collapseType="sidebar" className="bg-[#18335D]">
                                <Navbar.Container tag="ul" className="flex flex-col gap-5">
                                    <a className="text-white font-semibold text-md" href="/">Home</a>
                                    <a className="text-white font-semibold text-md" href="/#details">About Us</a>
                                    <a className="text-white font-semibold text-md" href="/#services">Services</a>
                                    <a className="text-white font-semibold text-md" href="/#contact">Contact</a>
                                </Navbar.Container>
                            </Navbar.Collapse>
                        </Navbar.Container>

                        <Navbar.Container className="flex gap-2">
                            {/* <Button className="lg:scale-100 scale-50 bg-[#18335D]">
                                Book Now
                            </Button>
                            <Button className="lg:scale-100 scale-50 bg-[#18335D]">
                                Whatsapp
                            </Button> */}
                            <button className="bg-[#18335D] lg:w-[150px] w-[100px] rounded-[5px] py-2 text-white" onClick={()=>navigation()}>Book Now</button>
                            <button className="bg-[#18335D] lg:w-[150px] w-[100px] rounded-[5px] py-2 text-white"> <ReactWhatsapp number="+971506036488" message="Hello, i got your number from Noman and Rohan Contracting and Maintenance Website. Can you help me?"> Whatsapp</ReactWhatsapp></button>
                            <Navbar.Toggle />
                        </Navbar.Container>
                    </Navbar.Container>
                </Navbar>
            </div>
        </>

    );
};

export default NavigationBar;