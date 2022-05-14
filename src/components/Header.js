import React from "react";
import "./Header.css";

const Header = () => {
  console.log(window.innerHeight);
  return (
    <div className="header">
      <div className="header_container">
        <h1>Santosh Auto Electricals</h1>
      </div>
    </div>
  );
};

export default Header;
