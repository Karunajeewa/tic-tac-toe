import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/style.scss'
import Footer from './view/Footer';
import Header from "./view/Header";


const App: React.FC = () =>{
    return(
        <Container fluid={true}>
            <Header/>
            
        </Container>
    )
};
export default App;
