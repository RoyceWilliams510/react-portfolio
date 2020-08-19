import React from "react";
import Carousel from "../components/Carousel";

var information = [
    {
        image: "./images/budget-buddy-logo.png'",
        title: "Budget Buddy",
        link1:"https://agile-retreat-52176.herokuapp.com/",
        link2:"https://github.com/RoyceWilliams510/budget-buddy"
    },
    {
        image: "./images/homePage.png",
        title: "Plan N Jam",
        link1:"https://roycewilliams510.github.io/project-1/",
        link2:"https://github.com/RoyceWilliams510/project-1"
    },
    {
        image: "./images/note-taker.png",
        title: "Note Taker",
        link1:"https://polar-tundra-02660.herokuapp.com/",
        link2:"https://github.com/RoyceWilliams510/note-taker"
    }
    
]

const Portfolio = ()=>{
    const listedItems = information.map((item,index)=>{
        return (
             <Carousel
                        image = {item.image}
                        title ={item.title}
                        link1 = {item.link1}
                        link2 = {item.link2}
                />)
    })
    
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col m3"></div>
                <div className = "col m6 s12">
                    <h2>My Projects</h2>
                    <p>Welcome to my project gallery, below is a carousel containing links to a few of my recent projects as well as the links to their git hub repositories.
                        Feel free to check any of them out.
                    </p>
                </div>
            </div>
            <div className = "row">
                <div className = "col m3"></div>
                <div className = "col s12 m6">
                    <div className="carousel carousel-slider center">
                        {listedItems}
                        <div class="carousel-item blue" style={{backgroundImage: "url('../../assets/employee-tracker.png')"}} href="#four!">
                        <h2><a href = "https://github.com/RoyceWilliams510/employee-tracker" class = "black-text web-link">Employee Tracker</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
       
    )
}

export default Portfolio;