import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp =({ value })=>{

    const [counter, setCounter] = useState(10);

    const handleAdd = (event) =>{
        setCounter(counter + 1);
    }

    return <>
        <h1> CounterApp </h1>   
        <h3> { counter } </h3>   
        <button onClick={handleAdd} >
             + 1 
        </button>
    </> 
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}