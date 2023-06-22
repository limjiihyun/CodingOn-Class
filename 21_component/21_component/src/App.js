import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import RainBow from "./rainbow";
import Input from "./Input";
//import Test from "./Test";
import Test2 from "./Test2";
import Best from "./Best";
import Class from "./class";
import Food1 from "./Food1";

function App() {
  const name = "로이";
  const animal = "강아지";
  const classes = 3 + 5;
  const a = 10;
  const b = 9;

  return (
    <div className="App">
      <FunctionComponent></FunctionComponent>

      <Food1 food="떡볶이"></Food1>
      <Best></Best>
      <Class text="App 컴포넌트에서 넘겨준 text props입니다."></Class>
    </div>
  );
}

export default App;
