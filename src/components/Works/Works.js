import './Works.scss'
import { useState } from 'react'
import { works } from '../../data'
import WorksSlide from './WorksSlide'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (path) => {
    path === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : works.length - 1)
      : setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <ScrollContainer
        className="slider"
        // style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {works.map((work) => (
          <WorksSlide work={work} />
        ))}
      </ScrollContainer>
      {/* <img
        src="assets/arrow.svg"
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/arrow.svg"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      /> */}
    </div>
  )
}
