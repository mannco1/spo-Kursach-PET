import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SquareForms = ({start, end}) => {
  const [performances, setPerformances] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/perfomance/', {
          params: {
            fields: ['id','title', 'composer', 'img']
          }
        });
        setPerformances(response.data);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ width: '1120px', overflow: 'hidden', margin: '6vw 0 0 0' }}>
      <h1 style={{ color: 'gray', padding: '10px 10px 10px ' }}>Buy <span style={{ color: 'white', fontFamily: "UnifrakturCook, cursive" }}>MUSIC</span> to support the scene</h1>
      <ImageList sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
        {performances.slice(start, end).map((item) => (
          <ImageListItem key={item.id} sx={{ width: '250px', margin: '6px',cursor: 'pointer'  }} onClick={() => navigate(`/detail/${item.id}`)}>
            <img
              src={`${process.env.REACT_APP_API_URL + item.img}`} // Путь к изображению
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={<h1 style={{ fontSize: '1.5rem', color: 'white', fontFamily: 'JetBrains Mono' }}>{item.title}</h1>}
              subtitle={<span style={{ fontFamily: 'JetBrains Mono', color: 'white' }}>by: {item.composer}</span>}
              position="below"
            />
          </ImageListItem> 
        ))}
      </ImageList>
    </div>
  );
};

export default SquareForms;
