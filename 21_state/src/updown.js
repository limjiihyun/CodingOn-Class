import React from "react";
import "./App.css";

class UpDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  up = () => {
    this.setState({ number: this.state.number + 2 });
  };
  down = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={this.up}>+2</button>
        <button onClick={this.down}>-1</button>
      </div>
    );
  }
}

export default UpDown;
