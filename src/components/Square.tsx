import React, { useState } from 'react';


type SquareProps = {
    value: string;
    isFirstPlayer: boolean;
    setFirstPlayer: (value:boolean) => void;
}
const Square: React.FC <SquareProps>= (props) =>{
    const {value, isFirstPlayer, setFirstPlayer} = props;
    const [showValue,setShowValue] = useState(value);
    const handleClick = () => {
        setShowValue(isFirstPlayer ? "x" : "o");
        setFirstPlayer(!isFirstPlayer);
    }

    return(
               <div className="box" onClick={handleClick}>{showValue}</div>
    )
;}
export default Square;