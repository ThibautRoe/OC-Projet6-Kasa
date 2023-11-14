import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import BasicLayout from './components/BasicLayout'
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'

const routes = [{
    element: <BasicLayout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/a-propos",
            element: <About />
        },
        {
            path: "/logement/:id",
            element: <Logement />
        },
        {
            path: "/404",
            element: <PageNotFound />
        },
        {
            path: "*",
            element: <Navigate to="/404" />
        }
    ]
}]

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/OC-Projet6-Kasa/' })
//If server started with npm run dev, import.meta.env.DEV = 1, else 0. It allows us to specify a rule to get the right path for the router when it is launched on Github Pages

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)