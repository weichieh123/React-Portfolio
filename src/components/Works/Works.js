import './Works.scss'
import { useState } from 'react'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: 1,
      title: 'KieKa RWD Website',
      info: '切版練習，以Html架構切出KieKa RWD網頁',
      tags: 'RWD',
      iconDesktop: true,
      iconMobile: true,
      img: 'assets/Works/kieka(index).PNG',
      link: 'https://weichieh123.github.io/html-css-bootstrap/kieka/index.html',
    },
    {
      id: 2,
      title: 'Verse RWD Website',
      info: '切版練習，以Html架構切出Verse RWD網頁',
      tags: 'RWD',
      iconDesktop: true,
      iconMobile: true,
      img: 'assets/Works/verse(index).PNG',
      link: 'https://weichieh123.github.io/html-css-bootstrap/verse/index.html',
    },
    {
      id: 3,
      title: 'FransHals Desktop Website',
      info: '切版練習，以Html架構切出Verse 桌機版網頁',
      tags: 'Desktop',
      iconDesktop: false,
      iconMobile: true,
      img: 'assets/Works/FransHals(index).JPG',
      link: 'https://weichieh123.github.io/html-css-bootstrap/FransHals/index.html',
    },
  ]

  const handleClick = (path) => {
    path === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="iconRow">
                    {d.iconDesktop && (
                      <div className="imgContainer">
                        <img src="assets/desktop.svg" alt="" />
                      </div>
                    )}
                    {d.iconMobile && (
                      <div className="imgContainer">
                        <img src="assets/mobile.svg" alt="" />
                      </div>
                    )}
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.info}</p>
                  <span>{d.tags}</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
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
      />
    </div>
  )
}
