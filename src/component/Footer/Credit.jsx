import dream from "../../assets/dream.png"

const Credit = () => {
    return (
        <div className="bg-[white] lg:mx-24 mx-5 py-5">
            <div className="flex lg:flex-row flex-col gap-2 items-center justify-evenly">
                <h1 className="lg:text-sm text-[10px]">Copyright © 2024 Noman & Rohan General Contracting and Maintenance  Abu Dhabi  , UAE</h1>
                <div className="flex items-center gap-2">
                    <h1 className="lg:text-sm text-[10px]">Developed by</h1>
                    <a href="https://dreamweavestations.com/" target="_blank" className="flex items-center">
                        <img className="lg:w-10 w-5" src={dream} alt="" />
                        <h1 className="lg:text-sm text-[10px]">DreamWeave Stations</h1>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Credit;