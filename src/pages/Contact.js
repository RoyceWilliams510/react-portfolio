import React from "react";
import ContactCard from "../components/contactCard";
import ContactInfo from "../components/contactInfo";

var information = [
    {
        image: "./images/github.png",
        title: "Github",
        description:"One of the best places to view my past projects is to look through the repositories on my gihub page."+
        "On my page you can find all of the assignments I have completed with my program at the bootcamp aswell"+
        "as a few personal projects I had made when I was first getting into coding.",
        link:"https://github.com/RoyceWilliams510",
        username:"roycewilliams510"
    },
    {
        image: "./images/linkedin.png",
        title: "Linkedin",
        description:" Like anyone else searching for a job, my linkedin page is one of the best places to connect with me on"+
        "and also is a great site to view if you want to get to know my background better without having to read my resume.",
        link:"https://www.linkedin.com/in/royce-williams-3334261ab/",
        username:"Visit"
    }
    
]

const Contact = ()=>{
    const listedItems = information.map((item,index)=>{
        return (<div className="col s12 m4" key= {index}>
             <ContactCard
                        image = {item.image}
                        title ={item.title}
                        description= {item.description}
                        link = {item.link}
                        username = {item.username}
                />
        </div>)
    })
    return (
        <div className = "container">
            <div className="row">
                {listedItems}
                <ContactInfo/>
            </div>
        </div>
    )
}

export default Contact;