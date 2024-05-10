<<<<<<< HEAD
import React from 'react';
import Home from "../components/Home.jsx";
import Slider from "../components/Slider.jsx";
import '../components/css/App.css'
import SquareFormsPaginator from '../components/SquareFormsPaginator.jsx';
import MyPagination from '../components/MyPagination.jsx';

const MainPage = () => {
    return (
        <div className='glavniy'style={{ backgroundColor: '#000000', height: "100vw", }}>
        <div className='container' style={{alignContent:'center'}}> 
        <Home/>
          <Slider/>
          <SquareFormsPaginator/>
          
        </div>
        </div>
    );
};

export default MainPage;

=======
import React from 'react';
import Home from "../components/Home.jsx";
import Slider from "../components/Slider.jsx";
import '../components/css/App.css'
import SquareFormsPaginator from '../components/SquareFormsPaginator.jsx';
import MyPagination from '../components/MyPagination.jsx';

const MainPage = () => {
    return (
        <div className='glavniy'style={{ backgroundColor: '#000000', height: "100vw", }}>
        <div className='container' style={{alignContent:'center'}}> 
        <Home/>
          <Slider/>
          <SquareFormsPaginator/>
          
        </div>
        </div>
    );
};

export default MainPage;

>>>>>>> 91f02e22980dd7dc9338a207f427d607117b1d1e
