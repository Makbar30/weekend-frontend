import React from 'react'
import Button from './Button'

const PortofolioCard = props => {

    const { objPortofolio } = props

    return (
        <div className="card-row">
                <div className="card-row__desc">
                    <h3>{objPortofolio.title}</h3>
                    <p>{objPortofolio.desc}</p>
                    <Button>Take a look</Button>
                </div>
                <div className="card-row__image">
                    <img src={`/assets/images/${objPortofolio.image}`} alt="Portofolio"/>
                </div>
            </div>
    )
}

export default PortofolioCard