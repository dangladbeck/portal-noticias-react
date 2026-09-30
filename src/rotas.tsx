import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";

const rotas = createBrowserRouter(
    [
        {
            path: "/",
            Component: App,
            children: [
                {
                    index: true,
                    Component: Home
                },
                {
                    path: "/login",
                    Component: Login
                },
                {
                    path: "/sobre",
                    Component: Sobre
                }
            ]
        }
    ]
);

export default rotas;