import React from "react";
import "./App.css";
class Input extends React.Component {
  //클래스형 컴포넌트에서는 render()가 필수!
  render() {
    return (
      <div className="box">
        <div className="hello">Hello World</div>
        <div>
          아이디: <input></input>{" "}
        </div>
        <div>
          비밀번호 : <input></input>
        </div>
      </div>
    );
  }
}

export default Input;
