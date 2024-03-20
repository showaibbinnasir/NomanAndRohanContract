import setting from "../../assets/Settings.png"
import support from "../../assets/Support.png"
import bookmarks from "../../assets/Bookmark.png"
import document from "../../assets/Document.png"

const Features = () => {
    const features = [
        {
            title: "Free Measurement",
            icon: setting
        },
        {
            title: "Quick Installation",
            icon: support
        },
        {
            title: "Huge Experiences",
            icon: bookmarks,
        }, {
            title: "Result Stratagies",
            icon: document
        }
    ]
    return (
        <div className="lg:mt-[130px] mt-[130px] flex justify-center">
            <div className=" lg:flex grid grid-cols-2 md:grid-cols-4 llg:gap-5 gap-2 mx-2">
                {
                    features.map((feature, i) => <div style={{zIndex: -999}} className="bg-[#D9D9D9] lg:px-10 lg:py-8 px-4 py-3 rounded-lg drop-shadow-md" key={i}>

                        <div className="flex justify-center"><img src={feature.icon} alt="" /></div>
                        <h1 className="text-center">{feature.title}</h1>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Features;