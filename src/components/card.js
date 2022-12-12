
function Card(props){

    return(
        <div className="card">
            <img src={props.item.imageUrl} width="226px" height="268px" alt="mt.fugi"></img>

            <div className="card-items"> 
                <div className="card--location">
                    <img src={require('../images/location.png')} width="10px" alt="location-icon"></img>
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1>{props.item.title}</h1>

                <p>{props.item.startDate} - {props.item.endDate}</p>

                <p>
                {props.item.description}
                </p>
            </div>

        </div>
    )
}

export default Card;