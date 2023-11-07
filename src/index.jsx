import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BasicLayout from './components/BasicLayout'
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import { Navigate } from 'react-router-dom'

const router = createBrowserRouter([
    {
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
                path: "/logement/:id/:title",
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
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)