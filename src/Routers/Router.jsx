import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root
    },
]);