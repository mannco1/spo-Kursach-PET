import React from 'react';
import SquareForms from './SquareForms'
import { Button } from '@mui/material';
import './css/Home.css'

const SquareFormsPaginator = () => {
    

    return (
        <div>
            <SquareForms firstP={0} secondP={8}/>
            <Button variant="outlined" color="error"><span ><a style={{fontSize:'1.5rem',color:'white',fontFamily:'JetBrains Mono'}} href='/Music'>SHOW MORE</a></span></Button>
        </div>
    );
};

export default SquareFormsPaginator;