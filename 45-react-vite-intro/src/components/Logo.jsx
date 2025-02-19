{/**
    
    props: {
        slogan: "valore dinamico"
    }    
    
*/}

const Logo = (props) => {

    const slogan = props.slogan 

    return(
        <figure>
            <img src="/logo.png" alt={ slogan } />
            { /* Slogan */ }
            <p>{ slogan || 'Pasta fresca dal 1864'}</p>
        </figure>
    )
}

export default Logo;