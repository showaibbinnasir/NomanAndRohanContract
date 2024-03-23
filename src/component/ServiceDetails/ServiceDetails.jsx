import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const ServiceDetails = () => {
    const data = useLoaderData()
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    document.title = `${data[0].banner.bannerTitle}`
    return (
        <div>
            <h1>{data[0].banner.bannerTitle}</h1>
        </div>
    );
};

export default ServiceDetails;