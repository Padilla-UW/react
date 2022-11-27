import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp =({ value })=>{

    const [counter, setCounter] = useState(value);

    const handleAdd = (event) =>{
        setCounter(counter + 1);
    }
    const handleSubstract = () => setCounter(counter - 1);
    
    const handleReset = () => setCounter(value);
    

    return <>
        <h1> CounterApp </h1>   
        <h3> { counter } </h3>   
        <button onClick={handleAdd} > + 1 </button>
        <button onClick={handleSubstract} > - 1 </button>
        <button onClick={handleReset} > reset </button>
    </> 
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}