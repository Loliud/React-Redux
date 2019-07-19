import React from 'react';
import Home from './pages/HomePage/Home';
import NotFoundPage from './pages/PageNotFound/NotFound';
import ProductsListPage from './pages/ProductsListPage/ProductsListPage';
import ProductActionPage from './pages/ProductActionPage/ProductAction';


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
        path: "/product/add",
        exact: false,
        main : () => <ProductActionPage/>
    },
    {
        path: "/product/:id/edit",
        exact: false,
        main : ({match}) => <ProductActionPage match={match}/>
    },
    {
        path: "",
        exact: false,
        main : () => <NotFoundPage/>
    }
    
];

export default routes;