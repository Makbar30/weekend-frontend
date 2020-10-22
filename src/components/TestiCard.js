import React from 'react';

function TestiCard(props){
    const { testiObj } = props
    return(
        <div className="testi-card">
            <h1>{testiObj.by}</h1>
            <p>{testiObj.testimony}</p>
        </div>
    )
}

export default TestiCard