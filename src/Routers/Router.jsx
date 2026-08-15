import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Books from '../Pages/Books/Books';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import BookDetails from '../Pages/BookDetails/BookDetails';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/Books.json'),
                path:'/',
                Component: Home
            },
            {
                path:'/listedBooks',
                Component: ListedBooks
            },
            {
                path:'/bookDetails/:bookId',
                Component: BookDetails
            }
        ]
    },
]);