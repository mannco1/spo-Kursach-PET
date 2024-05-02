import React from 'react';
import './css/Home.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import aard from './pic/315d80a683ebad5162e059b4e655ebc91d2a5df6r1-535-594v2_hq.jpg'
import helmet from './pic/Untitled 5.jpg'
import helmetnon from './pic/helmet - non.jpg'
const Home = () => {
    
  

    return (
        
        <div className='container-Home'>
       <div className='mjolnir-pic'>

        <img src={helmetnon} alt="Mjolnir Helmet" className="responsive-img"/>
        
        </div>

        
         <AppBar position="static" color="default" style={{ backgroundColor: '#000000',}}>
      <Toolbar>
        <div className='button-group-header' >
        <Button className='button-style' style={{ fontSize: '1rem' }}>NAme_magaza</Button>
        <Button className='button-style' style={{ fontSize: '1rem' }}>Новости</Button>
        <Button className='button-style' style={{ fontSize: '1rem' }}>Музыка</Button>
        <Button className='button-style' style={{ fontSize: '1rem' }}>Мерч</Button>
        <Button className='button-style' style={{ fontSize: '1rem' }}>Группы</Button>
        </div>
        <IconButton className='button-style' aria-label="Корзина" style={{marginLeft: 'auto'}}>
        <ShoppingCartIcon />
      </IconButton>
      </Toolbar>
      
    </AppBar>
    </div>
    );
};

export default Home;