import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const BandsForms = ({firstP, secondP}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBandsData, setFilteredBandsData] = useState([]);
  const handleSearch = () => {
    const filtered = bandsData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBandsData(filtered);
  };
const bandsData=[
     {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Gropu1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'BlackmetalGroup2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'BLAckmetal3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Gropu1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'BlackmetalGroup2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'BLAckmetal3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Gropu1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'BlackmetalGroup2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'BLAckmetal3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'BLAckmetal3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'BLAckmetal3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'BLAckmetal3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate enim nulla dignissimos eaque alias deleniti. Officia quia ea nulla.',
    
  },
  
].slice(firstP, secondP); 


     



    return (
        <div style={{ width: '1120px', overflow: 'hidden',margin:'6vw 0 0 0' }}>
            <h1 style={{color:'gray', padding:'10px 10px 10px '}}><span  style={{color:'white', fontFamily: "UnifrakturCook, cursive"}}>Bands</span></h1>


            <div style={{ display: 'flex', alignItems: 'center', background: 'black', padding: '5px', borderRadius: '5px' }}>
      <IconButton aria-label="search" onClick={handleSearch}>
        <SearchIcon style={{ color: 'white' }} />
      </IconButton>
      <TextField
        label=""
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        InputProps={{
          placeholder: "Search",
          style: { color: 'white' },
          sx: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          },
        }}
      />
    </div>


    <ImageList sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
        {filteredBandsData.length > 0 ? filteredBandsData.map((item) => (
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
        )) : bandsData.map((item) => (
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