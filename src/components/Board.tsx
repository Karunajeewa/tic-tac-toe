import React, { useState } from 'react';
import {Container } from 'react-bootstrap';
import Square from './Square';

const Board: React.FC = () =>{
    const [isFirstPlayer, setIsFirstPlayer] = useState(false);

    const nineBox: string[] = ['','','','','','','','',''];
    const renderBord = () => {
        return nineBox.map((value:any) =>
        <Square value={value} isFirstPlayer={isFirstPlayer} setFirstPlayer={setIsFirstPlayer}/>
            )
    }

    return(
        <Container className="box-board">
            <div className="board">
                {renderBord()}
            </div>
        </Container>
    )
};
export default Board;