import cup from "../../assets/achievement.png"
import book from "../../assets/book.png"
import cap from "../../assets/cap.png"

const AboutCard = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <div className="lg:flex grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className="flex flex-col gap-5 bg-white drop-shadow-lg p-5 lg:w-[370px] w-[330px] h-[305px] justify-center">
                    <div className="flex">
                        <div className="bg-[#F8F8FB] p-5 rounded-full">
                            <img src={cup} alt="" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-semibold">Qualified Experts</h1>
                    <h1>Entrust your property to our certified
                        specialists, ensuring precision and
                        expertise in every maintenance
                        service we provide.</h1>
                </div>
                <div className="flex flex-col gap-5 bg-white drop-shadow-lg p-5 lg:w-[370px] w-[330px] h-[305px] justify-center">
                    <div className="flex">
                        <div className="bg-[#F8F8FB] p-5 rounded-full">
                            <img src={book} alt="" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-semibold">Affordable Package</h1>
                    <h1>Benefit from our cost-effective
                        packages, providing exceptional
                        value without compromising on the
                        quality of our maintenance services.</h1>
                </div>
                <div className="flex flex-col gap-5 bg-white drop-shadow-lg p-5 lg:w-[370px] w-[330px] h-[305px] justify-center">
                    <div className="flex">
                        <div className="bg-[#F8F8FB] p-5 rounded-full">
                            <img src={cap} alt="" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-semibold">Quality Professionals</h1>
                    <h1>Our team of professionals dedicated
                        to delivering superior quality across
                        all maintenance services,
                        guaranteeing your satisfaction.</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;