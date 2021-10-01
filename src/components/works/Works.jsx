import React from 'react';
import "./works.scss"


const Works = () => {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt=""/>
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur
                                    deserunt dolorem illum incidunt ipsam saepe
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/SliderImage2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/arrow.png" className="arrow left" alt=""/>
            <img src="assets/arrow.png" className="arrow right" alt=""/>
        </div>
    );
};

export default Works;