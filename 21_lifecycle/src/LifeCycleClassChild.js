import React from "react";

class LifeCycleClassChild extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <>
        <p>LifeCycleClassChild {this.props.number}</p>
      </>
    );
  }
}

export default LifeCycleClassChild;
