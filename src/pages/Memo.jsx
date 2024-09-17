import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";


const ChildMemo = React.memo(({count}) => { 
    return <div> contador:{count} </div>
});

export const Memo = () => { 
    const [count, setCount] = React.useState(0);
    const [auxState, setAuxState] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleAuxState = () => {
        setAuxState(auxState + 1);
    }
    return (<div>
    <Button onClick={handleIncrement}>incremaetar</Button>
    <Button onClick={handleAuxState}> incrementar contador auzxiliar</Button>

        <ChildMemo count={count}/>
    </div>)
}