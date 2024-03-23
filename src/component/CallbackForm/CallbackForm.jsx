import vector from "../../assets/vector.png"
import send from "../../assets/Send.png"
import whatsapp from "../../assets/Whatsapp.png"
import { Input, Label, Textarea } from 'keep-react'
import ReactWhatsapp from "react-whatsapp";
import emailjs from "@emailjs/browser";
import { useState } from 'react'
import { Check } from 'phosphor-react'
import { Button, Modal, Typography } from 'keep-react'

const CallbackForm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const handleForm = (event) => {
        event.preventDefault()
        emailjs.sendForm("service_wk6gb5f", "template_kjnqi7f", event.target, "gInjccIl4ZwYBMeuN")
        
        openModal()
        event.target.reset()

    }
    return (
        <div>
            <div className=" bg-gradient-to-b from-[#18335D] from-[10%] to-[#4C81D1] py-8">
                <form onSubmit={handleForm} className="lg:mx-24 mx-5">
                    <div>
                        <h1 id="contact" className="text-4xl text-white font-semibold text-center">Request a Callback</h1>
                        <h1 className="text-white text-center my-5">Enter your details in form and we will call you back.</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="mt-5 flex lg:flex-row flex-col-reverse gap-5">
                            <div className="lg:w-[650px] w-[350px]">
                                <fieldset className="max-w-md space-y-1">
                                    <Label className="text-white" htmlFor="name">Enter Name</Label>
                                    <Input id="name" placeholder="Enter name" type="text" name="name" required />
                                </fieldset>
                                <fieldset className="max-w-md space-y-1">
                                    <Label className="text-white" htmlFor="mail">Enter Your Email</Label>
                                    <Input id="mail" placeholder="Enter email" type="email" name="email" required />
                                </fieldset>
                                <fieldset className="max-w-md space-y-1">
                                    <Label className="text-white" htmlFor="text">Enter Your Text</Label>
                                    <Textarea className="lg:w-[450px] w-[350px]" id="text" name="text" placeholder="Write your message here." required />
                                </fieldset>

                            </div>
                            <div>
                                <img className="lg:w-[450px] w-[350px]" src={vector} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="flex flex-col gap-1">
                            <button type="submit" className="bg-[white] lg:w-[450px] w-[350px] rounded-[5px] py-2 text-[4C81D1] drop-shadow-lg mt-5 font-semibold text-xl">
                                <div className="flex justify-center">
                                    <div className="flex items-center gap-4">
                                        <img className="w-10" src={send} alt="" />
                                        <span>Submit</span>
                                    </div>
                                </div>

                            </button>
                            <button className="bg-[white] lg:w-[450px] w-[350px] rounded-[5px] py-2 text-[4C81D1] drop-shadow-lg mt-5 font-semibold text-xl">
                                <div className="flex justify-center">
                                    <div className="flex items-center gap-4">
                                        <img className="w-10" src={whatsapp} alt="" />
                                        <span>or <ReactWhatsapp number="+8801880614408" message="Hello, i got your number from Noman and Rohan Contracting and Maintenance Website. Can you help me?"> Whatsapp</ReactWhatsapp></span>
                                    </div>
                                </div>

                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Modal.Body className="flex flex-col items-center">
                    <Modal.Icon className="h-20 w-20 bg-[#18335D] text-white">
                        <Check size={60} />
                    </Modal.Icon>
                    <Modal.Content className="my-4 text-center">
                        <Typography variant="h3" className="mb-2 text-body-1 font-bold text-metal-900">
                            Message Sent
                        </Typography>
                        <Typography variant="p" className="text-body-4 font-normal text-metal-600">
                            Your message has been sent to our team. We will contanct with you as soon as possible. Thank you.
                        </Typography>
                    </Modal.Content>
                    <Modal.Footer>
                        <Button onClick={closeModal} size="sm" className="bg-[#18335D]">
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CallbackForm;