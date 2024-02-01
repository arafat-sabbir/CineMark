import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import MovieDetail from "../Pages/MovieDetail/MovieDetail";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'movieDetail',
                element:<MovieDetail/>
            }
        ]
    }
])

export default route;