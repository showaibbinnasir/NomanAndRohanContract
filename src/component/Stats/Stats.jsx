import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Stats = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className="flex justify-center py-5 bg-[#D1CCCC]">
                <div className="lg:flex grid grid-cols-2 m-5 gap-10">
                    <div>
                        <h1 className="text-4xl text-center text-[#453E3E] font-bold">{counterOn && <CountUp start={0} end={109} />}</h1>
                        <h1 className="text-sm text-center">Commercial Project</h1>
                    </div>
                    <div>
                        <h1 className="text-4xl text-center text-[#453E3E] font-bold">{counterOn && <CountUp start={0} end={130} />}</h1>
                        <h1 className="text-sm text-center">Residential Project</h1>
                    </div>
                    <div>
                        <h1 className="text-4xl text-center text-[#453E3E] font-bold">{counterOn && <CountUp start={0} end={18} />}+</h1>
                        <h1 className="text-sm text-center">Hardworking Employees</h1>
                    </div>
                    <div>
                        <h1 className="text-4xl text-center text-[#453E3E] font-bold">{counterOn && <CountUp start={0} end={366} />}</h1>
                        <h1 className="text-sm text-center">Happy Customer</h1>
                    </div>

                </div>
            </div>
        </ScrollTrigger>

    );
};

export default Stats;