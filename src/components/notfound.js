import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Header from '../components/header/index';

const NotFound = () => (    
        <Container id="mainContainer">
            <div id="header">
                <Header/>  
            </div>
            <div id="content">
                <h2>OOPS - Page Not Found!!!</h2>
                Click <Link to="/">here</Link> to Go Home
            </div>              
        </Container>
);

export default NotFound;