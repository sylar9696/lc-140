import { useCounterContext } from "../context/CounterContext"


const CounterButton = () => {

    const { increment } = useCounterContext()


    return(
        <div className="container text-center">
            <button className="btn btn-primary" onClick={increment}>Incrementa</button>
        </div>
    )
}

export default CounterButton