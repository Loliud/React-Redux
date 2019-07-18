import React from 'react';
import About from './components/About.js';
import Products from './components/Products.js';
import Home from './components/Home';
import NotFound from './components/NotFound';


const routes = [
    {
        path: "/",
        exact : true,
        main: () => <Home/>
    },
    {
        path: "/about",
        exact : false,
        main: () => <About/>
    },
    {
        path: "/products",
        exact : false,
        main: ({match}) => <Products match={match}/>
    },
    {
        path: '',
        exact : true,
        main: () => <NotFound/>
    }
];

export default routes;