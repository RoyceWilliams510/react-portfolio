import React from "react";
// import "./style.css"

function contactInfo(props) {

    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                <img src="./images/contact.png"></img>
                </div>
                <div className="card-content">
                <span className="card-title black-text">Contact Me</span>
                <h6><i className="small material-icons">email</i><a href="mailto:rojwilli@uscs.edu"> Email me</a></h6>
                <h6><i className="small material-icons">call</i> +1 (510) 926-0368</h6>
                </div>
            </div>
        </div>
    )
}

export default contactInfo;