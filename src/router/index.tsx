import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/cadastro',
        element: <Register/>
    },
    {
        path: '/perfil',
        element: <Profile/>
    },
    {
        path: '/favoritos',
        element: <Favorites/>
    },
    {
        path: '/carrinho',
        element: <Cart/>
    }
])