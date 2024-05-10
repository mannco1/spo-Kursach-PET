import React from 'react';
import SquareForms from './SquareForms'
import { Button } from '@mui/material';
import './css/Home.css'

const SquareFormsPaginator = () => {
    

    return (
        <div >
            <SquareForms firstP={0} secondP={8} />
            <div >
            <Button variant="outlined" color="error" ><span ><a style={{fontSize:'1.5rem',color:'white',fontFamily:'JetBrains Mono',}} href='/music'>SHOW MORE</a></span></Button>
       </div>
        </div>
    );
};

export default SquareFormsPaginator;