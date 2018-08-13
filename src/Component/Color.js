import React from 'react'

const Color = ({title,color,rating,onRate,onRemove}) => {
    return (
        <div className="colorDiv">
            <h3>{title}</h3>
            <div className="colorBlock" style={{backgroundColor:color}}></div>
        </div>
    )
}

export default Color
