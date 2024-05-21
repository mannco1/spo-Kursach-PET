import React from 'react';
import Home from '../components/Home';
import Footer from '../components/Footer';

const Error404 = () => {
    return (
        <div className='glavniy' style={{ backgroundColor: '#000000', height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='container' style={{ textAlign: 'center' }}> 
                <Home/>
                <h2 style={{ color: 'white', fontFamily: 'JetBrains Mono' }}>This page doesn't seem to <span style={{ fontFamily: "UnifrakturCook, cursive", fontSize: '3rem' }}>exist.</span></h2>
                <div style={{ color: 'grey', fontFamily: 'JetBrains Mono' }}>
                   <div style={{height:'25vh'}}> It looks like the link pointing here was faulty. Maybe try searching? </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Error404;
