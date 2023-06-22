import React from "react";
import "./App.css";
import coding from "../src/logo192.png";

class Best extends React.Component {
  //클래스형 컴포넌트에서는 render()가 필수!
  render() {
    const { title, author, price, type } = this.props;

    return (
      <div className="bestbox">
        <h3 className="besttext">이번주 베스트셀러</h3>
        <img className="bextbox2" src={coding} />
        <h2 className="bextbox2">{title}</h2>
        <h4 className="bextbox2">저자 : {author}</h4>
        <h4 className="bextbox2">판매가 : {price}</h4>
        <h4 className="bextbox2">저자 : {title}</h4>
        <h4 className="bextbox2">구분: {type}</h4>
      </div>
    );
  }
}
Best.defaultProps = {
  title: "나의 하루는 4시 40분에 시작된다",
  author: "김유진",
  price: "13,500원",
  type: "자기계발서",
};

export default Best;
