import React from 'react';
import './css/Home.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import helmet from './pic/Untitled 5.jpg'
import helmetnon from './pic/helmet - non.jpg'
const Home = () => {
    
  

    return (
        
        <div className='container-Home'>
       <div className='mjolnir-pic'>

       <a href='/'> <img src={helmetnon} alt="Mjolnir Helmet" className="responsive-img"/></a>
        
        </div>

        
         <AppBar position="static" color="default" style={{ backgroundColor: '#000000',}}>
      <Toolbar>
        <div className='button-group-header' >
       <a href='/'><Button className='button-style-main' style={{ fontSize: '3rem' }}>HoF</Button></a>
        <a href='news'><Button className='button-style' style={{ fontSize: '1rem' }}>Новости</Button></a>
        <a href='music'><Button className='button-style' style={{ fontSize: '1rem' }}>Музыка</Button></a>
        <a href='merch'><Button className='button-style' style={{ fontSize: '1rem' }}>Мерч</Button></a>
        <a href='bands'><Button className='button-style' style={{ fontSize: '1rem' }}>Группы</Button></a>
        </div>

     
          <IconButton className='button-style' aria-label="Корзина" style={{marginLeft: 'auto'}}>
            <a href='/backet' style={{color:'white'}}><ShoppingCartIcon /></a>
        </IconButton>
       

      </Toolbar>
      
    </AppBar>
    </div>
    );
};

export default Home;