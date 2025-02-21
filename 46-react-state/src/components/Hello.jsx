const Hello = () => {


    const saluto = () => {
        alert('Ciao')
    }

    return(
        <button onClick={saluto} >Salutami</button>
    )
}

export default Hello;