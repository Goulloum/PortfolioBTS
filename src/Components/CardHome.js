

function CardHome(props){
    var containerStyle = {
        
    }


    return(
        <div className="cardhome-container" style={containerStyle}>
            <div className="blur"></div>
            <div className="cardhome-title">{props.name}</div>
            <div className="btn-go-to"></div>
        </div>
    )
}

export default CardHome;