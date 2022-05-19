import React, { useEffect,useRef } from 'react'
import {init} from "ityped"
import "./Intro.scss"

export default function Intro()
{
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed:40,
            strings:["Software Engineer"]
        })
    }, [])
    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                <img src="https://code-cache.com/en/wp-content/uploads/2021/09/code9.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There , I'm</h2>
                    <h1>Souley Abdoul</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                    <a href="#portfolio">
                    <img src="/assets/down.png" alt="" />
                </a>
                </div>
                
            </div>
        </div>
    )
}
