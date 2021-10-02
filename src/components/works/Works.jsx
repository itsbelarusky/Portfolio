import React, {useState} from 'react';
import "./works.scss"
import {dataWork} from "../../data"


const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < dataWork.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {dataWork.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt=""/>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")}/>
        </div>
    );
};

export default Works;