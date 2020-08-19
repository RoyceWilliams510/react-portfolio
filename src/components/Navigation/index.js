import React from "react";
import "./style.css"

function Navigation() {
    const h3Style = {
        fontWeight: "900",
         color: "black", 
         fontSize: "60px"
    }
    const colStyle = {
        textAlign: "right",
        marginTop: "1.9466666667rem", 
        fontWeight: "900",
        color: "#1de9b6"
    }
    return (
        <div style={{position: "relative"}} className="container">
            <div className="row">
            <div className="col s9">  <h3 style={h3Style}><a href="/" className="black-text">Royce Williams</a></h3></div>
            <div className="col s3" id="current-date" style={colStyle}></div>
            </div>
            <nav className="#ffffff white z-depth-0">
                <div className="nav-wrapper z-depth-0">
                    <ul id="nav-mobile" style={{fontWeight: "900"}} className="z-depth-0 left">
                        <li><a href="/projects" className="black-text">View Projects</a></li>
                        <li><a href="/contact" className="black-text">Contact Me</a></li>
                        <li><a href="/" className="black-text">About Me</a></li>
                        <li><a href="./images/Royce_Williams_Resume.PDF" className="black-text">Resume</a></li>

                    </ul>
                </div>
            </nav>  
        </div>
    )
}

export default Navigation;
        