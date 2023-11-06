import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BasicLayout from './components/BasicLayout'
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

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
                path: "*",
                element: <ErrorPage />
            }
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)