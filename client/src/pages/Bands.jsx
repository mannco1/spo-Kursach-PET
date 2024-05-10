import React from 'react';

import Home from '../components/Home';
import BandsForms from '../components/BandsForms';

const Bands = () => {
    return (
        <div className='glavniy'style={{ backgroundColor: '#000000', height: "110%", }}>
        <div className='container' style={{alignContent:'center'}}> 
         <Home/>
         <BandsForms/>
          
        </div>
        </div>
    );
};

export default Bands;