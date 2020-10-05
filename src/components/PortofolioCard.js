import React from 'react'

const PortofolioCard = props => {

    const { objPortofolio } = props

    return (
        <div className="card-row">
                <div className="card-row__desc">
                    <h3>{objPortofolio.title}</h3>
                    <p>{objPortofolio.desc}</p>
                    <a className="btn" href={objPortofolio.url} target="_blank" without rel="noopener noreferrer">Take a look</a>
                </div>
                <div className="card-row__image">
                    <img src={`/assets/images/${objPortofolio.image}`} alt="Portofolio"/>
                </div>
            </div>
    )
}

export default PortofolioCard