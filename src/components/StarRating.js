import React from 'react'
import Star from './Star'
import PropTypes from 'prop-types'

const StarRating = ({starsSelected=3,onRate=f=>f,totalStars=5}) => 
    <div>
        {
            [...Array(totalStars)].map((n,i)=>
                <Star  key={i} 
                    selected={i<starsSelected} 
                    onClick={()=>onRate(i+1)} 
                />
            )
        }
    </div>

StarRating.propTypes = {
    totalStars: PropTypes.number
}

export default StarRating