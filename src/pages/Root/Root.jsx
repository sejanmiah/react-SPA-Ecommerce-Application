import React from 'react';
import Navber from '../../component/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';

const Root = () => {
    return (
        <>
        <Navber />
        <div className='w-11/12 mx-auto'>
        <Outlet/>  
        </div>
        <Footer />
        </>

        
    );
};

export default Root;