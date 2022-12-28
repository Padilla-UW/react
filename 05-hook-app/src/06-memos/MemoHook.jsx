import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

export const MemoHook = () => {

    const heavyStuff = (iteraciones)=>{
        for (let i = 0; i < iteraciones; i++) {
            console.log('Ahi vamos');
        }
        return iteraciones;
    }
  
    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
    return (
        <>
            <h1>Counter: {counter} </h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button
                className="btn btn-primary"
                onClick={()=>increment()}
            >
            +1</button>

            <button
                className="btn btn-outline-primary"
                onClick={()=>setShow(!show)}
            >
                Show/Hidden {JSON.stringify(show)}
            </button>
        </>
  )
}
