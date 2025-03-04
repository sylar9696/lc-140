//import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import { useEffect } from "react";
// import axios from "axios";
import { useGlobalContext } from "../../context/GlobalContext";

const SingleProduct = () => {
    const { id } = useParams()

    // const url = import.meta.env.VITE_ENDPOINT_URL

    const navigate = useNavigate()


    // const [ singlePizza, setSinglePizza ] = useState( {
    //     id: '',
    //     name: '',
    //     image: '',
    //     ingredients: []
    // } )

    const { singlePizza, getPizzaId } = useGlobalContext()


    

    useEffect( () => {
        // axios.get( `${url}/${id}` )
        //     .then( res => setSinglePizza( res.data ) )

        // fetch( `${url}/${id}`, { method: 'GET' } )
        //     .then( res => res.json() )
        //     .then( data => setSinglePizza( data ) )

            // navigate('/pizzas')

        getPizzaId( id )

    }, [id] ) 


    return(
        <>
            <h1>Singolo prodotto: { id }</h1>
            <h2>Titolo: { singlePizza.name }</h2>
            
            <ul>

                {
                    singlePizza.ingredients.map( (elem, id) => {
                        return(
                            <li key={id}> {elem} </li>
                        )
                    }  )
                }
            </ul>

            <button onClick={() => navigate(-1)}>
                torna alla pagina precedente
            </button>
        </>
    )
}

export default SingleProduct;