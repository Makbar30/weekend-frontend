import React from 'react';

function HtCard(props) {
    const { helpObj } = props
    return (
        <div className="ht-card">
            <img className="ht-img" src={helpObj.image} alt={helpObj.slug} />
            <div className="ht-desc">
                <p>{helpObj.title}</p>
                <img src="assets/images/oval-icon.svg" alt="oval-icon" />
            </div>
        </div>
    )
}

export default HtCard