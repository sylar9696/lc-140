//import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const { id } = useParams()

    return(
        <h1>Singolo prodotto: { id }</h1>
    )
}

export default SingleProduct;