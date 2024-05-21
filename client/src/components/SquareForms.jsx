import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const SquareForms = ({ start, end }) => {
  const [performances, setPerformances] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();

  // Определяем количество колонок в зависимости от размера экрана
  const isXlUp = useMediaQuery(theme.breakpoints.up('xl'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  let columns;
  if (isXlUp) {
    columns = 5;
  } else if (isLgUp) {
    columns = 4;
  } else if (isMdUp) {
    columns = 3;
  } else if (isSmUp) {
    columns = 2;
  } else {
    columns = 1;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/performance/', {
          params: {
            fields: ['id', 'title', 'composer', 'img']
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
    <div style={{ width: '100%', overflow: 'hidden', margin: '6vw 0 0 0', padding: '0 20px' }}>
      <h1 style={{ color: 'gray', padding: '10px 0' }}>Buy <span style={{ color: 'white', fontFamily: "UnifrakturCook, cursive" }}>MUSIC</span> to support the scene</h1>
      <ImageList cols={columns} gap={16} sx={{ width: '100%', margin: 0 }}>
        {performances.slice(start, end).map((item) => (
          <ImageListItem key={item.id} sx={{ cursor: 'pointer' }} onClick={() => navigate(`/detail/${item.id}`)}>
            <img
              src={`${process.env.REACT_APP_API_URL + item.img}`} // Путь к изображению
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
            <ImageListItemBar
              title={<h1 style={{ fontSize: '1.2rem', color: 'white', fontFamily: 'JetBrains Mono' }}>{item.title}</h1>}
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
