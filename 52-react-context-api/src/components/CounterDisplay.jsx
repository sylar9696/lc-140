import { useCounterContext } from "../context/CounterContext"

const CounterDisplay = () => {

    const { count } = useCounterContext()

    return(
        <div className="container text-center">
            <h1>{ count }</h1>
        </div>
    )
}

export default CounterDisplay