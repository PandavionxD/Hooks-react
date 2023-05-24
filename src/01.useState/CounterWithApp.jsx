import { UseCounter } from "./hooks/useCounter"

export const CounterWithApp = () => {

    const { value, increment, decrement, reset } = UseCounter()


    return (
        <>
            <h1>
                Use counter : {value}
            </h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>increment(2)}  >+1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
        </>
    )
}

export default CounterWithApp
