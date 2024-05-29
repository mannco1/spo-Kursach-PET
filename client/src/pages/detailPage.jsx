import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Home from '../components/Home';
import { Box, Tabs, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import '../components/css/App.css'
import Footer from '../components/Footer';



const DetailPage = () => {
  const { id } = useParams();
  const [performance, setPerformance] = useState(null);
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/performance/${id}`);
        setPerformance(response.data);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };
    fetchData();
  }, [id]);

  if (!performance) return <div>Loading...</div>;

  return (

    
          <div className='glavniy'style={{ backgroundColor: '#000000', height: "100%", }}>
        <div className='container' style={{alignContent:'center'}}> 
         <Home/>
         
         <h1 style={{color: 'white'}}>{performance.composer} - {performance.title}</h1>
<div style={{display:'flex',flexWrap: 'wrap' ,width:'100%'}}>

      <img  style={{height:'44vh',width:'45vh',margin:'left' }} src={`${process.env.REACT_APP_API_URL + performance.img}`} alt={performance.title} />

      <div style={{ padding: '35px' }}>
      <TabContext value={value}>
        <Box sx={{  borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Description" value="1" sx={{ color: 'white' }} />
            <Tab label="Item Two   " value="2" sx={{ color: 'white' }} />
          </TabList>
        </Box>
        <TabPanel style={{width:"30vw",color: 'white'}} value="1">{performance.description}</TabPanel>
        <TabPanel style={{width:"30vw",color: 'white'}} value="2">Item Two</TabPanel>
      </TabContext>
    </div>

        </div>
        <Footer/>
        </div>
        </div>
  );
};

export default DetailPage;
