import React from 'react';
import Icon from '../images/oval-icon.svg'
function HtCard(props) {
    const { helpObj } = props
    return (
        <div className="ht-card">
            <img className="ht-img" src={helpObj.image} alt={helpObj.slug} />
            <div className="ht-desc">
                <p>{helpObj.title}</p>
                <img src={Icon} alt="oval-icon" />
            </div>
        </div>
    )
}

export default HtCard