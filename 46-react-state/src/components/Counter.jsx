import { useState } from "react"

const Counter = () => {

    // let counter = useState( 0 )

    /*
    
    useState = [ 0, function() ]

    const [ counter, setCounter ] = useState( 0 )
    
    */

    //Destructuring dell'array generATO DA useState
    const [ counter, setCounter ] = useState( 0 )

    const conteggio = () => {
        setCounter( counter + 1 )
    }

    return (
        <>
            <div>{ counter }</div>
            <button onClick={ conteggio } >Incrementami!</button>
        </>
    )
}

export default Counter;