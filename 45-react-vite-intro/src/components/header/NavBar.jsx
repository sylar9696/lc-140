/* eslint-disable react/prop-types */
const NavBar = (props) => {

    // const links = [
    //     { id: 1, text: 'Home', url: '#', current: false },
    //     { id: 2, text: 'Prodotti', url: '#', current: true },
    //     { id: 3, text: 'Chi Siamo', url: '#', current: false },
    //     { id: 4, text: 'Contatti', url: '#', current: false },
    //     { id: 5, text: 'About', url: '#', current: false }
    //   ];

    /*

props : {
    links: [
        {
    }
    ]
}

*/
    //destrutturo l'oggeto per usare direttamente l'array piuttosto che scrivere props.links
    const { links } = props;

    return(
        <nav>
                <ul>

                    {
                        links.map((element) => {

                            const { id, text, url, current } = element;

                            return(
                                <li key={id}>
                                    <a className={ current ? 'active' : '' } href={url}>
                                        {text}
                                    </a>
                                </li>
                            )
                        })
                    }


                    {/* <li><a className="text-primary" href="#">Home</a></li>
                    <li><a href="#" className="active">Prodotti</a></li>
                    <li><a href="#">Chi siamo</a></li>
                    <li><a href="#">Contatti</a></li> */}
                </ul>
            </nav>
    )
}

export default NavBar