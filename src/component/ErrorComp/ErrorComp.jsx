
import { Empty, Button } from "keep-react";
const ErrorComp = () => {
    return (
        <div className="lg:h-[950px] h-[450px] w-[100%] flex items-center">
            <Empty>
                <Empty.Image>
                    <img
                        src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
                        
                    />
                </Empty.Image>
                <Empty.Title>Oops! You seem to be lost</Empty.Title>
                <Empty.Description>
                    Seems like you hitten to a route which is not valid or unknown. Please go to home and try again. Thank you.
                </Empty.Description>
                <a href="/"><Button value="outline">Go to home</Button></a>
            </Empty>
        </div>
    );
};

export default ErrorComp;