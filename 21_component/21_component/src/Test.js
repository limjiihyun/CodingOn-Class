import React from "react";
import "./App.css";

class Test extends React.Component {
  //클래스형 컴포넌트에서는 render()가 필수!
  render() {
    const name = "임지현";

    return <div className="my_style">{name}</div>;
  }
}

export default Test;
