import React, { Component } from 'react'
import AddColorForm from './Component/AddColorForm'
import ColorList from './Component/ColorList'
import {v4} from 'uuid'


export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }

    addColor(title,color,rating) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating
            }
        ]
        this.setState({colors})
        setTimeout(() => {
            console.log(this.state.colors)
        }, 100)
    }

    rateColor(id,rating) {
        const colors = this.state.colors.map((color)=>
            (color.id!==id) ? color : {...color,rating}
        )
        this.setState({colors})
    }
    
    removeColor(id) {
        const colors = this.state.colors.filter((color)=>
            color.id!==id
        )
        this.setState({colors})
    }

    render() {
        const {addColor,rateColor,removeColor} = this
        const colors = this.state.colors
        return (
        <div>
            <AddColorForm onNewColor={addColor} />
            <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
        </div>
        )
    }
}

export default App
