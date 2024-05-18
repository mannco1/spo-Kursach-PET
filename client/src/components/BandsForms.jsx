
import React, { useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState } from 'react';



const BandsForms = () => {
 


const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
     



    return (
        <div style={{ width: '1120px', overflow: 'hidden',margin:'6vw 0 0 0' }}>
            <h1 style={{color:'gray', padding:'10px 10px 10px '}}><span  style={{color:'white', fontFamily: "UnifrakturCook, cursive"}}>Bands</span></h1>

    <ImageList sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
       {bands.map((item) => (
          <ImageListItem key={item.img} sx={{ width: '265px', margin: '6px' }}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={<h1 style={{ fontSize: '1.5rem', color: 'white', fontFamily: 'JetBrains Mono' }}>{item.title}</h1>}
              subtitle={<span style={{ fontFamily: 'JetBrains Mono', color: 'white' }}>{item.content}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
    );
};

export default BandsForms;
