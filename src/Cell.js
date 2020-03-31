import React, { Component } from 'react';
import { render } from 'react-dom';

class Cell extends Component {
    constructor(prop) {
        super()
        this.state = {
            color: prop.value
        } 
        // ...define initial state with a key of 'color' set to the 'value' prop
    }

    activateCell = () => {
        this.setState({
            color: '#333'
        })
       
    }

    render() {
        return(
            <div className='cell' onClick={this.activateCell} style={{backgroundColor: this.state.color}}>
                
            </div>
        )
      }
}

export default Cell

  