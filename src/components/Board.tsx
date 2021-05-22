import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import Square from './Square';

const Board: React.FC = () =>{

    return(
        <Container className="box-board">
            <div className="board">
                <React.Fragment>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                    <Square/>
                </React.Fragment>
            </div>
        </Container>
    )
};
export default Board;