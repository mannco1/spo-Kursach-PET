import React from 'react';
import MyPagination from '../components/MyPagination';
import Home from '../components/Home';

const MusicPage = () => {
    return (
        <div className='glavniy'style={{ backgroundColor: '#000000', height: "110%", }}>
        <div className='container' style={{alignContent:'center'}}> 
        <Home/>
         <MyPagination/>
          
        </div>
        </div>
    );
};

export default MusicPage;