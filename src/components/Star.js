import React from 'react'
import PropTypes from 'prop-types'

const Star = ({ selected=false, onClick=f=>f }) => 
    <div onClick={onClick} 
        className={selected ? "star selected" : "star"}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star