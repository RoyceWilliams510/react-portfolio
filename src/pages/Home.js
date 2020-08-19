import React from "react";


const Home = ()=>{


    return (
        <div className = "container">
            <div className="row">
                <div className = "col s0 m3"></div>
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src="./images/profile.JPG"></img>
                        </div>
                        <div className="card-content">
                            <span className="card-title">About Me</span>
                            <p>Hello my name is Royce Williams, and welcome to my portfolio. A few things you should know about me are that I was born and raised in Berkeley, California. 
                                My birthday is November 30th 2000 so as of right now I am 19 years old. For schooling I attended public schools in the Berkeley Unified School District, 
                                and I graduated from Berkeley High School in the class of 2019. Something that I am proud of in my academic record is the fact that I am a recipiant of the 
                                international baccalaureate diploma which is a globally recognized diploma for high school students. Currently I am an undergraduate student at the University 
                                of California Santa Cruz, and am majoring in computer science.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;