import React, { useState } from "react";
/*
1. Component's name must start with a Capital letter.
2. Component is to be exported to use by another component.
3. On the contrary, Component should import to use any component
*/

/*
  JSX:
1. Using CamelCase (ex: className)
2. JS: Use with {} when using JS variables or functions.
3. CSS, Style : use with {{}} + object.
*/

const temp = 1;

function Test() {
  const [temp, setTemp] = useState(0);

  /* useState :
    1. first fator : variable name
    2. second fator : function which changes the state
    3. useState function fator : State's initial value and type

    !!! The reason why state is used in React is that re-landering(refreching a page) is not performed every time the value is changed.

    Using Rull :
    1. Always use setState when changing the state value.
    2. The setState must be used as a function when used in the "on" property of the HTML tag.
  */

  return (
    <div>
      <h1
        className="test"
        // style={{ color: "red", fontSize: "3rem" }}
      >
        Test Component <br />
        {temp}
        <button onClick={() => setTemp(temp + 1)}>Increae</button>
      </h1>
    </div>
  );
}

export default Test;
