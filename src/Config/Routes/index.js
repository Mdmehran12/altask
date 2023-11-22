import { Outlet, useRoutes } from "react-router-dom";
import SidebarMenu from "../../Layout/SidebarMenu/sidebarMenu";
import Login from "../../pages/Auth/login";
import Home from "../../pages/Home/home";
import Map from "../../pages/Map/map";
import UseState from "../../pages/UseState/useState";

const routes = [
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'dashboard',
                element: <SidebarMenu />,
                children: [
                    {
                        path: 'usestate',
                        element: <UseState />,
                    },
                    {
                        path: 'map',
                        element: <Map />,
                    }
                ],
            },
        ],
    },
];




export default routes