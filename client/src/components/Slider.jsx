import './css/App.css'
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mypic1 from './pic/1slade.jpg';
import mypic2 from './pic/2slade.jpg';
import mypic3 from './pic/WAR-HC-slider-2.jpg';

const Slider = () => {
    return (
      <Carousel style={{height:'350px',width:"1120px"}}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block mx-auto"
            src={mypic3}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block mx-auto"
            src={mypic2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block mx-auto"
            src={mypic1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block mx-auto"
            src={mypic3}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block mx-auto"
            src={mypic2}
            alt="Second slide"
          />
        </Carousel.Item>
        
      </Carousel>
    );
  };
  
  export default Slider;