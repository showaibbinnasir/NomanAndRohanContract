import vector from "../../assets/vector.png"
import send from "../../assets/Send.png"
import whatsapp from "../../assets/Whatsapp.png"
import { Input, Label, Textarea } from 'keep-react'

const CallbackForm = () => {
    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const text = form.text.value
        const data = {name, email,text}
        alert(`${data.name} send a message from ${data.email}`)
    }
    return (
        <div className=" bg-gradient-to-b from-[#18335D] from-[10%] to-[#4C81D1] py-8">
            <form  onSubmit={handleForm} className="lg:mx-24 mx-5">
                <div>
                    <h1 id="contact" className="text-4xl text-white font-semibold text-center">Request a Callback</h1>
                    <h1 className="text-white text-center my-5">Enter your details in form and we will call you back.</h1>
                </div>
                <div className="flex justify-center">
                    <div className="mt-5 flex lg:flex-row flex-col-reverse gap-5">
                        <div className="lg:w-[650px] w-[350px]">
                            <fieldset className="max-w-md space-y-1">
                                <Label className="text-white" htmlFor="name">Enter Name</Label>
                                <Input id="name" placeholder="Enter name" type="text" name="name" />
                            </fieldset>
                            <fieldset className="max-w-md space-y-1">
                                <Label className="text-white" htmlFor="mail">Enter Your Email</Label>
                                <Input id="mail" placeholder="Enter email" type="email" name="email" />
                            </fieldset>
                            <fieldset className="max-w-md space-y-1">
                                <Label className="text-white" htmlFor="text">Enter Your Text</Label>
                                <Textarea className="lg:w-[450px] w-[350px]" id="text" name="text" placeholder="Write your message here." />
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
                                    <span>Whatsapp</span>
                                </div>
                            </div>

                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CallbackForm;