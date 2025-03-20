import StarRating from "./StarRating"

export default function ReviewCard({review}){

    const {id, name, vote, text} = review

    return(
        <>
            <div key={id} className="card mb-4">
                <div className="card-body">
                    <h5>{name}</h5>
                    <p className="card-text">
                        {text}
                    </p>
                    <span>Voto: <StarRating vote={vote}/> {vote} / 5</span>
                </div>
            </div>
        </>
    )
}