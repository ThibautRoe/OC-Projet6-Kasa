import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import BasicLayout from "./components/BasicLayout"
import Home from "./pages/Home"
import Logement from "./pages/Logement"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"

/**
 * @file this index.jsx is the root file for this app
 * @author Thibaut Roegiers
 * @see https://oc-6-kasa.vercel.app/
 */

/**
 * Array of routes
 * @type {Array}
 */
const routes = [
    {
        element: <BasicLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/a-propos",
                element: <About />,
            },
            {
                path: "/logement/:id",
                element: <Logement />,
            },
            {
                path: "/404",
                element: <PageNotFound />,
            },
            {
                path: "*",
                element: <Navigate to="/404" />,
            },
        ],
    },
]

/**
 * Router
 * @type {object}
 */
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
