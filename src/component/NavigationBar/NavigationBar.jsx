"use client";

import { Navbar } from "keep-react";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
    return (
        <>
            <div className=" sticky top-0 z-[999999]">
                <Navbar fluid={true}>
                    <Navbar.Container className="flex items-center justify-between lg:mx-24">
                        <Navbar.Container className="flex items-center">
                            <Navbar.Brand>
                                <img className="w-[150px]" src="logo.png" />
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
                                <NavLink className='text-md font-semibold' to="/">Home</NavLink>
                                <NavLink className='text-md font-semibold' to="/">About Us</NavLink>
                                <NavLink className='text-md font-semibold' to="/services">Services</NavLink>
                                <NavLink className='text-md font-semibold' to="/">Contact</NavLink>
                            </Navbar.Container>
                            <Navbar.Collapse collapseType="sidebar" className="bg-[#18335D]">
                                <Navbar.Container tag="ul" className="flex flex-col gap-5">
                                    <NavLink className="text-white font-semibold text-md" to="/">Home</NavLink>
                                    <NavLink className="text-white font-semibold text-md" to="/">About Us</NavLink>
                                    <NavLink className="text-white font-semibold text-md" to="/services">Services</NavLink>
                                    <NavLink className="text-white font-semibold text-md" to="/">Contact</NavLink>
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
                            <button className="bg-[#18335D] lg:w-[150px] w-[100px] rounded-[5px] py-2 text-white">Book Now</button>
                            <button className="bg-[#18335D] lg:w-[150px] w-[100px] rounded-[5px] py-2 text-white"> Whatsapp</button>
                            <Navbar.Toggle />
                        </Navbar.Container>
                    </Navbar.Container>
                </Navbar>
            </div>
        </>

    );
};

export default NavigationBar;