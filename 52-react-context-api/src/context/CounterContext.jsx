import { createContext, useState, useContext } from "react";

//1. creo il context
const CounterContext = createContext();

//2. creo il provider
const CounterProvider = ( { children } ) => {
    //2 logica del context
    const [ count, setCount ] = useState(0)


    const increment = () => setCount( ( prev ) => prev + 1 )

    return(
        <CounterContext.Provider value={ { count, increment } }>
            { children }
        </CounterContext.Provider>
    )
}

// 3 creo un custom hook
const useCounterContext = () => {
    const context = useContext( CounterContext )
    return context
}
//export del provider e nel caso il custom hook
export {
    CounterProvider,
    useCounterContext
}


