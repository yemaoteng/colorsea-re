import React from 'react'
import Color from './Color'

const ColorList = ({colors,onRate,onRemove}) => {
    return (
        <div>
            {colors.map((color,i) =>
                <Color key={i} {...color} onRate={onRate} onRemove={()=>onRemove(i)} />
            )}
        </div>
    )
}

export default ColorList
