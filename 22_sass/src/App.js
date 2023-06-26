import "./App.css";
import P56 from "./components/P56";
// import Origin from "./components/Origin";
import SassComponent from "./components/SassComponent";
import StyledComponent from "./components/StyleComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Origin></Origin> */}
      {/* <SassComponent></SassComponent> */}
      {/* <P56></P56> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StyledComponent />}></Route>
          <Route path="/origin" element={<Origin></Origin>}></Route>
          <Route path="/sass" element={<SassComponent></SassComponent>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <StyledComponent></StyledComponent> */}
    </div>
  );
}

export default App;

