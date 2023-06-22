import React from "react";
import "./App.css";
import coding from "../src/logo192.png";

class Test2 extends React.Component {
  //클래스형 컴포넌트에서는 render()가 필수!
  render() {
    return (
      <div className="style">
        <h2>안녕하세요</h2>
        <img src={coding} />
      </div>
    );
  }
}

export default Test2;
