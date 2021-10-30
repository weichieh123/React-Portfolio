import './Nav.scss'
import { GiStripedSun } from 'react-icons/gi'

export default function Nav({ menuOpen, setMenuOpen }) {
  return (
    <div className={"nav " + (menuOpen && "active")} id="nav">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <GiStripedSun />
            <span>Weichieh</span>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
