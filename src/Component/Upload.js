import React from "react";
import { useState } from "react";

function Upload() {
  const [content, setContent] = useState([]);
  const [contentList, setContentList] = useState([]);

  const onSubmit = () => {
    let arrTemp = [...contentList];
    arrTemp.push(content);
    setContentList([...arrTemp]);
    setContent("");
  };

  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          // console.log(e.currentTarget.value);
          setContent(e.currentTarget.value);
        }}
      />
      <button
        style={{ marginTop: "1rem" }}
        onClick={() => {
          onSubmit();
        }}
      >
        Send!!
      </button>
    </div>
  );
}

export default Upload;
