import React from 'react';
import { Container,Row,Col, } from 'react-bootstrap';
import Square from './components/Square';
import './styles/style.scss'
import Footer from './view/Footer';
import Header from "./view/Header";
import Board from './components/Board'


const App: React.FC = () =>{
    return(
        <Container fluid={true}>
            <Header/>
            <Board/>
        </Container>
    )
};
export default App;
