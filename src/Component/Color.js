import React from 'react'
import StarRating from './StarRating';

const Color = ({title,color,rating=0,onRate=f=>f,onRemove=f=>f}) => {
    return (
        <div className="colorDiv">
            <h3>{title}</h3>
            <button onClick={onRemove}>X</button>
            <div className="colorBlock" style={{backgroundColor:color}}></div>
            <StarRating starSeledted={rating} onRate={onRate} />
        </div>
    )
}

export default Color