import "./App.css";
import Test from "./test.js";

function App() {
  //1. Conditional : if-else, switch ---> ternary opreator
  //2. Loop: for ---> map (Should have a unique "key" property)
  //                  ,and it should use with <div></div>(<></>) to get several values on Loop.

  let flag = true;
  // function CheckFlag(flag) {
  //   if (flag) {
  //     return "true";
  //   } else {
  //     return "false";
  //   }
  // }

  let arr = [1, 2, 3];

  return (
    <div>
      <h1>Hello, React!</h1>
      {/* {CheckFlag(flag)} */}
      {flag ? "It is True" : "It is False"}

      {arr.map((element, idx) => {
        return (
          <div key={idx}>
            <p>Key value idx = {idx}</p>
            <p>{element}</p>
            <p>loop</p>
          </div>
        );
      })}

      <Test />
    </div>
  );
}

export default App;
