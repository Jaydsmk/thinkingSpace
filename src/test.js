import React from "react";

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
  return (
    <div>
      <h1 className="" style={{ color: "red", fontSize: "3rem" }}>
        Test Component <br />
        {temp}
      </h1>
    </div>
  );
}

export default Test;
