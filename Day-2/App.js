import React from "react";
// here "react" is coming from node_modules
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React from Bhavy🚀"),
    React.createElement("h2", {}, "Hello from head2 of child inside parent"),
  ])
);

// JSX will make our life easy

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from Bhavy!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
