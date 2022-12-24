import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/shared/Header/Header'
import Footer from '../Pages/shared/Footer/Footer'
const Main = () => {
    return (
        <div className='bg-slate-800 '>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;