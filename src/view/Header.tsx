import React from 'react';
import { Container } from 'react-bootstrap';

const Header:React.FC = () =>{
    return(
        <Container  fluid={true} className='header'>
            <h1>Tic Tac Toe Game</h1>
        </Container>
    )
};
export default Header;

