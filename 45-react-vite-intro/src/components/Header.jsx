const Header = () => {
    return (
        <header>
            <figure>
                <img src="/logo.png" alt="Logo" />
            </figure>
            <nav>
                <ul>
                    <li><a className="text-primary" href="#">Home</a></li>
                    <li><a href="#" className="active">Prodotti</a></li>
                    <li><a href="#">Chi siamo</a></li>
                    <li><a href="#">Contatti</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header