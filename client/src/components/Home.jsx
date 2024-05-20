import React from 'react';
import './css/Home.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  Link } from 'react-router-dom';
import helmetnon from './pic/helmet - non.jpg'

const Home = () => {
    
  

    return (
        
        <div className='container-Home'>
       <div className='mjolnir-pic'>

       <Link to="/"> <img src={helmetnon} alt="Mjolnir Helmet" className="responsive-img"/></Link>
        
        </div>

        
         <AppBar position="static" color="default" style={{ backgroundColor: '#000000',}}>
      <Toolbar>
        <div className='button-group-header' >

        <Link to="/"><Button className='button-style-main' style={{ fontSize: '3rem' }}>HoF Camp</Button></Link>
        <Link to="news"><Button className='button-style' style={{ fontSize: '1rem' }}>Новости</Button></Link>
        <Link to="music"><Button className='button-style' style={{ fontSize: '1rem' }}>Музыка</Button></Link>
        <Link to="merch"><Button className='button-style' style={{ fontSize: '1rem' }}>Мерч</Button></Link>
        <Link to="bands"><Button className='button-style' style={{ fontSize: '1rem' }}>Группы</Button></Link>

        </div>

     
          <IconButton className='button-style' aria-label="Корзина" style={{marginLeft: 'auto'}}>
            <Link to='/backet' style={{color:'white'}}><ShoppingCartIcon /></Link>
        </IconButton>
       

      </Toolbar>
      
    </AppBar>
    </div>
    );
};

export default Home;