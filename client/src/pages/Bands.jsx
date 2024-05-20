
import React from 'react';

import Home from '../components/Home';
import BandsForms from '../components/BandsForms';
import Footer from '../components/Footer';

const Bands = () => {
    return (
        <div className='glavniy'style={{ backgroundColor: '#000000', height: "100%" }}>
        <div className='container' style={{alignContent:'center'}}> 
         <Home/>
         <BandsForms start={0} end={8}/>
          <Footer/>
        </div>
        </div>
    );
};

export default Bands;