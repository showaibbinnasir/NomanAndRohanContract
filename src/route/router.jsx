import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default/Default";
import Homepage from "../component/Homepage/Homepage";
import MoreServices from "../component/MoreServices/MoreServices";
import ServiceDetails from "../component/ServiceDetails/ServiceDetails";
import Quote from "../component/Quote/Quote";

const router = createBrowserRouter([
    {
        path :  '/',
        element: <Default></Default>,
        errorElement  : <div>What the heck are you doing bitch</div>,
        children : [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: "/services",
                element: <MoreServices></MoreServices>
            },
            {
                path : "/service/:id",
                loader : ({params}) => fetch(`https://nomanandrohanbackend.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path:"/quote",
                element: <Quote></Quote>
            }
        ]
    }
])

export default router