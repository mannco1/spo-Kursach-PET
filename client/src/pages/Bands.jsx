
import React from 'react';

import Home from '../components/Home';
import MyBandPagination from '../components/MyBandPagination';
import Footer from '../components/Footer';

const Bands = () => {
    return (
        <div className='glavniy'style={{ backgroundColor: '#000000', height: "100%" }}>
        <div className='container' style={{alignContent:'center'}}> 
         <Home/>
         <MyBandPagination/>
          <Footer/>
        </div>
        </div>
    );
};

export default Bands;