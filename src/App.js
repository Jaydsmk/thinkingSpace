import "./App.css";
import Test from "./test.js";

function App() {
  //1. Conditional : if-else, switch ---> ternary opreator
  //2. Loop: for

  let flag = true;
  // function CheckFlag(flag) {
  //   if (flag) {
  //     return "true";
  //   } else {
  //     return "false";
  //   }
  // }

  return (
    <div>
      <h1>Hello, React!</h1>
      {/* {CheckFlag(flag)} */}
      {flag ? "It is True" : "It is False"}
      <Test />
    </div>
  );
}

export default App;
