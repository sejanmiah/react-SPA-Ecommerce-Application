import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Errorpage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import About from '../component/About/About';
import PhonesDetails from '../component/PhoneDetails/PhonesDetails';
import Cart from '../component/Cart/Cart';
import Favourites from '../component/Favourites/Favourites';
  
  
export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          index: true,
          path: '/',
          hydrateFallbackElement: <p>Loading Please Wait </p>,
          loader: () => fetch('Data.json'),
          Component: HomePage,
        },
        {
          path: '/about',
          Component: About,
        },
        {
          path: '/phone-details',
          Component: PhonesDetails,
        },
        {
          path: '/cart',
          Component: Cart,
        },
        {
          path: '/favourites',
          Component: Favourites,
        },
      ]
    },
  ]);