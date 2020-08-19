import React from "react";
// import "./style.css"

function contactCard(props) {

    return (
    <div className="card">
        <div className="card-image">
            <img src={props.image}></img>
        </div>
        <div className="card-content">
            <span className="card-title">Github</span>
            <p>{props.description}
            </p>
        </div>
        <div className="card-action">
            <a href={props.link}>{props.username}</a>
        </div>
    </div>
    )
}

export default contactCard;