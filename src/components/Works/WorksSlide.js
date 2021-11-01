export default function WorksSlide({ work }) {
  return (
    <div className="container">
      <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="iconRow">
              {work.iconDesktop && (
                <div className="imgContainer">
                  <img src="assets/desktop.svg" alt="" />
                </div>
              )}
              {work.iconMobile && (
                <div className="imgContainer">
                  <img src="assets/mobile.svg" alt="" />
                </div>
              )}
            </div>
            <h2>{work.title}</h2>
            <p>{work.info}</p>
            <span>{work.tags}</span>
          </div>
        </div>
        <div className="right">
          <img src={work.img} alt="" />
        </div>
      </div>
    </div>
  )
}
