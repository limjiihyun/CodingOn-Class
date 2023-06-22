import React from "react";

class ClassComponent extends React.Component {
  //기존형태
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    //this.up = this.up.bind(this);
  }
  // //현재
  // state = {
  //   number: 0,
  // };

  up = () => {
    this.setState({ number: this.state.number + 11 });
  };

  // up() {
  //   this.setState({ number: this.state.number + 11 });
  // }

  render() {
    const { number } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={this.up}>+11</button>
      </div>
    );
  }
}

export default ClassComponent;
