import React from "react";
import PropTypes from "prop-types";

//import {component} from "react";
//class ClassComponent extends Component

class ClassComponent extends React.Component {
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

ClassComponent.defaultProps = {
  name: "무기명",
  age: 20,
};
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default ClassComponent;
