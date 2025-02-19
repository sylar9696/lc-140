import Logo from "./Logo"
import NavBar from "./NavBar"

/*

props : {
    slogan: ,,,,,,
    links: [
        {
    }
    ]
}

*/

const Header = (props) => {
    return (
        <header>
            <Logo slogan={ props.slogan }/>
            
            <NavBar links={ props.links }/>
        </header>
    )
}

export default Header