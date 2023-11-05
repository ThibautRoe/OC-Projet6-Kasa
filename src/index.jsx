import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BasicLayout from './components/BasicLayout'
import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
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
                element: <Detail />,
            },
            {
                path: "*",
                element: <ErrorPage />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);