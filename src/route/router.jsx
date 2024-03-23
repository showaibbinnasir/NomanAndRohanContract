import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default/Default";
import Homepage from "../component/Homepage/Homepage";
import MoreServices from "../component/MoreServices/MoreServices";

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
            }
        ]
    }
])

export default router