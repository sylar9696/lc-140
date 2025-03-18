import {Link} from 'react-router-dom'

export default function BookCard( {book} ){

    const { id, title, author, abstract, image } = book

    return(
        <>
            <div className="card mb-4">
                <img src={image} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span>
                        {author}
                    </span>
                    <p>
                        {abstract}
                    </p>
                    <Link to={`books/${id}`}>Read More</Link>
                </div>
            </div>
        
        </>
    )
}