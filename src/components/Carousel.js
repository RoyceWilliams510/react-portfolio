import React from "react";

const Carousel = function(props){


    return(
        <div className="carousel-item red" style={{backgroundImage: "url('"+props.image+"')"}} href="#one!" >
                <h2><a href = {props.link1} className = "black-text web-link">{props.title}</a></h2>
                <p><a href = {props.link2} className="black-text web-link">View Github Repository</a></p>
        </div>
    )
}

export default Carousel;