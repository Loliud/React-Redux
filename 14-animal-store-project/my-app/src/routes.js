import React from 'react';
import Home from './pages/HomePage/Home';
import NotFoundPage from './pages/PageNotFound/NotFound';
import ProductsListPage from './pages/ProductsListPage/ProductsListPage';


const routes = [
    {
        path: "/",
        exact: true,
        main : () => <Home/>
    },
    {
        path: "/products",
        exact: false,
        main : () => <ProductsListPage/>
    },
    {
        path: "",
        exact: false,
        main : () => <NotFoundPage/>
    }
    
];

export default routes;