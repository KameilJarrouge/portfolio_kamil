import React, { useEffect } from "react";

function Tab({
  id,
  title = "Fair",
  selection = "",
  setSelection = (f) => f,
  onClick = (f) => f,
}) {
  useEffect(() => {}, [selection]);

  return (
    <div
      id={id}
      onClick={() => {
        setSelection(title);
        onClick();
      }}
      className={`w-fit h-fit bg-transparent text-primary border-b-2 shrink-0   ${
        selection === title
          ? "border-b-primary "
          : "border-b-transparent hover:border-b-primary "
      } py-0.5 px-2  cursor-pointer transition-colors`}
    >
      {title}
    </div>
  );
}

export default Tab;
