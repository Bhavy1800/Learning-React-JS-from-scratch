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

// React Functional Components
// is just a normal js function thst return some jsx code or react element or it can be neated also
// name it in a capital letter
const Title = () => <h1 className="title">Namaste React🚀</h1>;
const Title2 = () => (
  <h1 className="title2">Namaste React from Bhavy Patel🚀</h1>
);
const elem = <span>This is element</span>;
const react_ele = (
  <h2 className="react-ele">{elem} Namaste from React element</h2>
);
const number = 1000;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <Title2></Title2>
    <Title2></Title2>
    {react_ele}
    <h3>{number + 2000}</h3>
    {console.log("Namaste all of you from my side.")}
    <h1 className="heading">This is Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
root.render(<HeadingComponent />);
