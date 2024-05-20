import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import helmetnon from './pic/helmet - non.jpg';
import './css/Home.css';

const Home = () => {
    return (
        <div className='container-Home'>
            <div className='mjolnir-pic'>
                <Link to="/"> 
                    <img src={helmetnon} alt="Mjolnir Helmet" className="responsive-img"/>
                </Link>
            </div>
            <Navbar bg="black" variant="dark" expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="button-style-main" style={{ fontSize: '3rem' }}>HoF Camp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/news" className="button-style" style={{ fontSize: '1rem' }}>Новости</Nav.Link>
                            <Nav.Link as={Link} to="/music" className="button-style" style={{ fontSize: '1rem' }}>Музыка</Nav.Link>
                            <Nav.Link as={Link} to="/merch" className="button-style" style={{ fontSize: '1rem' }}>Мерч</Nav.Link>
                            <Nav.Link as={Link} to="/bands" className="button-style" style={{ fontSize: '1rem' }}>Группы</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/backet" className="button-style" style={{ color: 'white' }}>
                                <FaShoppingCart />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Home;
