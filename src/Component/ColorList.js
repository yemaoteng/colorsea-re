import React from 'react'
import Color from './Color'

const ColorList = ({colors,onRate=f=>f,onRemove=f=>f}) => {
    return (
        <div>
            {
                colors.map((color) =>
                    <Color
                        key={color.id} 
                        {...color} 
                        onRate={(rating)=>onRate(color.id,rating)} 
                        onRemove={()=>onRemove(color.id)} 
                    />)
            }
        </div>
    )
}

export default ColorList
