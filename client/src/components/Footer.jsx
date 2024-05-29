import React from 'react';
import { Link } from 'react-router-dom';
import visaAndmaster from './pic/visa_logo2.png'; 

const Footer = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '80px 20px',flexGrow: "1"}}>
            <div className='firstPart' style={{display: 'flex',flexDirection: 'column', alignItems: 'center',color:'white'}}>
                <p style={{margin: '10px '}}>Copyright © 2024 <span style={{ color: 'white', fontFamily: "UnifrakturCook, cursive",fontSize:'2rem' }}>HoF Camp</span></p> 
                <Link to="/terms" style={{textDecoration: 'none', color: 'inherit'}}>Terms</Link>
            </div>
            <div className='secondPart'>
                <img src={visaAndmaster} alt="Visa and MasterCard logos" style={{height: '30px'}}/>
            </div>
        </div>
    );
};

export default Footer;
