import React from 'react'

const Button = props => {
    return(
        <button onClick={()=> console.log("click")} className="btn">
            {props.children}
        </button>
    )
}

export default Button;