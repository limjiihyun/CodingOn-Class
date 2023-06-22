import React from "react";
import LifeCycleClassChild from "./LifeCycleClassChild";

class LifeCycleClass extends React.Component {
  state = {
    visible: true,
    number: 0,
  };

  changeNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumber}>PLUS</button>
        <button onClick={this.changeVisible}>ON/OFF</button>
        {this.state.visible && (
          <LifeCycleClassChild number={this.state.number} />
        )}
      </>
    );
  }
}
export default LifeCycleClass;
