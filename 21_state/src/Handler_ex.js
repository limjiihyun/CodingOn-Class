import React, { useState } from "react";
import "./App.css";

class Handler_ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World!",
    };
  }

  change = () => {
    this.setState({ text: "Goodbye World!" });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <h1>{text}</h1>
        <button onClick={this.change}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
