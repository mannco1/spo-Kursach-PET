
import React from 'react';
import Home from "../components/Home.jsx";
import Slider from "../components/Slider.jsx";
import '../components/css/App.css'
import SquareFormsPaginator from '../components/SquareFormsPaginator.jsx';
import MyPagination from '../components/MyPagination.jsx';
import Footer from '../components/Footer.jsx';

const MainPage = () => {
    return (
        <div className='glavniy'style={{ backgroundColor: '#000000', height: "100%", }}>
        <div className='container' style={{alignContent:'center'}}> 
        <Home/>
          <Slider/>
          <SquareFormsPaginator/>
          <Footer/>
        </div>
        </div>
    );
};

export default MainPage;
