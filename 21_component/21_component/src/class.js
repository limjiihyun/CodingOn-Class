import React, { useState } from "react";
import "./App.css";

class Class extends React.Component {
  //클래스형 컴포넌트에서는 render()가 필수!
  render() {
    // const { text, valid } = this.props;
    // const text = this.props;
    // const [valid, setValid]=useState("");
    const valid = () => {
      console.log("콘솔 띄우기 성공!");
    };

    return (
      <div>
        <h2>{this.props.text}</h2>
        <button onClick={valid}>콘솔메세지</button>
      </div>
    );
  }
}
Class.defaultProps = {
  text: "이건 기본 text props입니다.",
};

export default Class;
