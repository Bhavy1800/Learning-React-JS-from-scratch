import React from "react";
import ReactDOM from "react-dom/client";

// JSX => babel transpile it into React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

//JSX - is not HTML in JS but it is HTML-like or XML-like Syntax
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX 🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
