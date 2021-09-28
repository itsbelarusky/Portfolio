import React, {useEffect, useRef} from 'react';
import "./intro.scss"
import {init} from "ityped";


const Intro = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 50,
            strings: ["Developer", "Content Creator"]
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/evgeniy2.png" alt=""/>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Evgeniy Padasenko</h1>
                    <h3>React <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>

        </div>
    );
};

export default Intro;