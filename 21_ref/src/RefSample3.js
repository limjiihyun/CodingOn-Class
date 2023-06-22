import React from "react";

class RefSample3 extends React.Component {
  handleFocus = () => {
    this.myInput.focus();
  };

  render() {
    return (
      <>
        <p>클래스형 컴포넌트에서 버튼 클릭시 input focusing</p>
        <input type="text" ref={(ref) => (this.myInput = ref)} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample3;
