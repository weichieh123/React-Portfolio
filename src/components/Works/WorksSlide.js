export default function WorksSlide({ work }) {
  return (
    <div className="container">
      <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="iconRow">
              {work.iconDesktop && (
                <div className="imgContainer">
                  <img src={process.env.PUBLIC_URL + "/assets/desktop.svg"} alt="" />
                </div>
              )}
              {work.iconMobile && (
                <div className="imgContainer">
                  <img src={process.env.PUBLIC_URL + "/assets/mobile.svg"} alt="" />
                </div>
              )}
            </div>
            <h2><a href={work.link}>{work.title}</a></h2>
            <p>{work.info}</p>
            <span>{work.tags}</span>
          </div>
        </div>
        <div className="right">
          <img src={process.env.PUBLIC_URL + work.img} alt="" />
        </div>
      </div>
    </div>
  )
}
