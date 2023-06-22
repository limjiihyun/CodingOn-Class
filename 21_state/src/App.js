import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FuncComponent";
import TextComponet from "./text";
import P49 from "./p49";
import P50 from "./p50";
import Food1 from "./Food1";
import UpDown from "./updown";
import FunctionUpDown from "./functionupdown";
import Handler_ex from "./Handler_ex";

function App() {
  return (
    <div className="App">
      {/* <ClassComponent></ClassComponent> */}
      {/* <FunctionComponent></FunctionComponent> */}
      {/* <FunctionComponent></FunctionComponent>
      <TextComponet></TextComponet>
      <P49></P49>
      <P50></P50>
      <Food1 food="떡볶이"></Food1> */}
      <UpDown></UpDown>
      <FunctionUpDown></FunctionUpDown>
      <Handler_ex></Handler_ex>
    </div>
  );
}

export default App;
