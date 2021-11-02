import { useState, useEffect } from 'react'
import './Portfolio.scss'
import PortfolioList from '../PortfolioList/PortfolioList'
import { portfolioLayout, portfolioReact, portfolioVue } from '../../data'

export default function Portfolio() {
  const [selected, setSelected] = useState('Layout')
  const [data, setData] = useState([])
  const list = [
    {
      id: 'Layout',
      title: 'Layout',
    },
    {
      id: 'React',
      title: 'React',
    },
    {
      id: 'Vue',
      title: 'Vue',
    },
  ]

  useEffect(() => {
    switch (selected) {
      case 'Layout':
        setData(portfolioLayout)
        break
      case 'React':
        setData(portfolioReact)
        break
      case 'Vue':
        setData(portfolioVue)
        break
      default:
        setData(portfolioLayout)
        break
    }
  }, [selected])
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} className="item" key={d.id}>
            <img src={process.env.PUBLIC_URL + d.img} alt="" />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  )
}
