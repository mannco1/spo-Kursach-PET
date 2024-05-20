import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BandsForms = ({ start, end }) => {
  const [bands, setBands] = useState([]);
  const [leaders, setLeaders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBands = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/ensemble/', {
          params: {
            fields: ['id', 'name', 'leaderId', 'img']
          }
        });
        setBands(response.data);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };

    const fetchLeaders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/leader/', {
          params: {
            fields: ['id', 'name']
          }
        });
        setLeaders(response.data);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };

    fetchBands();
    fetchLeaders();
  }, []);

  const getLeaderName = (leaderId) => {
    const leader = leaders.find(leader => leader.id === leaderId);
    return leader ? leader.name : 'Unknown Leader';
  };

  return (
    <div style={{ width: '1120px', overflow: 'hidden', margin: '6vw 0 0 0' }}>
      <h1 style={{ color: 'gray', padding: '10px 10px 10px' }}>
        <span style={{ color: 'white', fontFamily: "UnifrakturCook, cursive" }}>Bands</span>
      </h1>
      <ImageList sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
        {bands.slice(start, end).map((item) => (
          <ImageListItem key={item.id} sx={{ width: '250px', margin: '6px', cursor: 'pointer' }} onClick={() => navigate(`/detailbands/${item.id}`)}>
            <img
              src={`${process.env.REACT_APP_API_URL + item.img}`} // Путь к изображению
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={<h1 style={{ fontSize: '1.5rem', color: 'white', fontFamily: 'JetBrains Mono' }}>{item.name}</h1>}
              subtitle={<span style={{ fontFamily: 'JetBrains Mono', color: 'white' }}>by: {getLeaderName(item.leaderId)}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default BandsForms;
