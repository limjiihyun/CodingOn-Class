import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import NotFound from "./pages/404";
import UserDetail from "./pages/UserDetail";

const RouterData= createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path: '',
                element:<Home/>
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
        errorElement:<NotFound/>,
    },
    {
        path: '/user',
        element: <App></App>,
        children:[
            {
                path:"",
                element:<User/>,
            },
            {
                path: ":userId",
                element: <UserDetail/>
            },
        ],
    },
]);
export default RouterData;