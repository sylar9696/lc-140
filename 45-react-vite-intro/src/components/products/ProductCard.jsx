const ProductCard = ( props ) => {

    const { product } = props;
    const { id, src, title, type, time } = product;

    return(
        <div className="card" key={id}>
             <img src={src} alt={title} />
             <h3>{title}</h3>
             <p>{type}</p>
             <p>{time} minuti</p>
        </div>
    )
}

export default ProductCard;