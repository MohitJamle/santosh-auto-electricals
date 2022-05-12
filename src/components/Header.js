import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <h1>Santosh Auto Electrical </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            bottom: "-50px",
            width: "100%",
          }}
        >
          Purchase Battery's From our shop at best price
        </p>
      </div>
    </div>
  );
};

export default Header;
