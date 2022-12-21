import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, reset, decrement } = useCounter(5);
  return (
    <>
        <h1>Counter With Hook : {counter}</h1>
        <hr />
        <button onClick={()=>increment(5)} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-primary">Reset</button>
        <button onClick={()=>decrement(5)} className="btn btn-primary">-1</button>
    </>
  )
}
