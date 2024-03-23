import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default/Default";
import Homepage from "../component/Homepage/Homepage";
import MoreServices from "../component/MoreServices/MoreServices";
import ServiceDetails from "../component/ServiceDetails/ServiceDetails";

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
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            }
        ]
    }
])

export default router