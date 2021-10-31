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
      strings: ['Front-end Web Engineer'],
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/photo.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi! I'm</h2>
          <h1>Huang WeiChieh</h1>
          <h3>a <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow-down.svg" alt="" />
        </a>
      </div>
    </div>
  )
}
