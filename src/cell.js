import React from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        color: props.value
    }
  }


  render() {
      console.log()
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => {return this.setState({ color: "#333"})}}></div>
    );
  }
}