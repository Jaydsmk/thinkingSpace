import React from "react";
import { useState } from "react";

function List() {
  const [content, setContent] = useState([]);
  const [contentList, setContentList] = useState([]);

  return (
    <div>
      {contentList.map((content, idx) => {
        return (
          <div
            key={idx}
            style={{
              marginLeft: "1rem",
              width: "100%",
            }}
          >
            Title: {content}
          </div>
        );
      })}
    </div>
  );
}

export default List;
