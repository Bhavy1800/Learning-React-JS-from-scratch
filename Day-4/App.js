import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
  - Logo
  - Nav items
* Body
  - Search
  - RestaurentContainer
    - RestaurentCard
      -IMG
      -Name of res,star rating, cusine, delivery time
  * Footer`1
  - Copright
  - Links
  - Contact
* 
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/T7MvKGeDSYO1RBDR_wUW3MLmi2hhUj_brKhYd_bHjdU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vZmFkMjI2/OTItZTFkYS00ZjUw/LTkyZjktM2I0YmRh/MDY2MDFiL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM3OTE5MzA3/MTMwNjAwMDAw.jpeg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = () => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        alt="res"
        className="res-logo"
        src="https://b.zmtcdn.com/data/dish_photos/e33/0a8da987c6ef7d51c9927a2ed05ade33.png"
      />
      <h3>BAPASITARAM</h3>
      <h4>Dabeli, Vadapav, Sandwich </h4>
      <h4>4.9 Stars</h4>
      <h4>15 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
