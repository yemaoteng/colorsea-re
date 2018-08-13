import React, { Component } from 'react'
import {v4} from 'uuid'


export class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
         colors: []
      }

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
        return (
        <div>
            
        </div>
        )
    }
}

export default App
