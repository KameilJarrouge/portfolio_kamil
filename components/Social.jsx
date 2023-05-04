import React from "react";

function Social({ url, children }) {
  return (
    <a href={url} target="_blank">
      {children}{" "}
    </a>
  );
}

export default Social;
