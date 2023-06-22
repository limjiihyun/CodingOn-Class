import React from "react";

class Animal extends React.Component {
  //클래스형 컴포넌트에서는 render()가 필수!
  render() {
    console.log(this.props);
    const { name, age } = this.props;

    const classes = "kdt7";
    return (
      <>
        <div>Hello class Component</div>;
        <div>
          Hello
          {classes === "kdt7" ? `kdt7기 ${name}입니다` : "누구세요?"}
        </div>
        <div>나이는{`${age}입니다`}</div>;
      </>
    );
  }
}
