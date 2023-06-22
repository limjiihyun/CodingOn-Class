import React from "react";
import "./App.css";

class RainBow extends React.Component {
  //클래스형 컴포넌트에서는 render()가 필수!
  render() {
    return (
      <div className="box1">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    );
  }
}

export default RainBow;
