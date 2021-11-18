import './Intro.scss'
import { useEffect, useRef } from 'react'
import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
      strings: ['Front-end Web Developer'],
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="introContainer">
          <a href="https://github.com/weichieh123?tab=repositories">
           <img src={process.env.PUBLIC_URL + "/assets/github.svg"} alt="" />
          </a>
        </div>
        <div className="imgContainer">
          <img src={process.env.PUBLIC_URL + "/assets/photo.jpg"} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi! I'm</h2>
          <h1>Huang Wei Chieh</h1>
          <h3>a <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src={process.env.PUBLIC_URL + "/assets/arrow-down.svg"} alt="" />
        </a>
      </div>
    </div>
  )
}
