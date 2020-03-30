import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super() 
    this.state = {
      color: props.value
    }
  }

  change = () => {
    let colorChange =  "#333"
    this.setState({
      color: colorChange
    })
  }

  render () {
    return (
      <div onClick={this.change} style={{backgroundColor: this.state.color}} className="cell"></div>
    )
  }
}

export default Cell;