import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import AddArticle from '../screens/AddPost';
import Home from '../screens/Home';

const routes = () =>  [
    {
        path: '/',
        element:<Layout />,
        children: [
            {
                path: 'add-post',
                element: <><AddArticle /> <Outlet /></>
            },
            {
                path: '/',
                element: <><Home /> <Outlet /></>
            }
        ]
    },
    {
        path: '*',
        element: <><h1>HEY BRO ESA PAG NO EXISTE 404</h1></>
    }
]

export default routes;