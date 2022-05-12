import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_box">
          <h3>We Welcomes you :</h3>
          <p>
            This is Sontosh Electricals located in Silicon-City Indore. we
            offers you the best deals on long vehicals battery, bike batteries,
            car batteries and Invertor battery.
          </p>
        </div>
        <div className="line"></div>
        <div className="footer_box">
          <h3>About This WebSite :</h3>
          <p>
            This Website is created by{" "}
            <a href="https://mohit-jamle.vercel.app/">Mohit Jamle</a> who
            created this website as a freelence project at minimum cost if you
            want your own website then just contact to him on his personal
            WebSite Link is{" "}
            <a href="https://mohit-jamle.vercel.app">{" >>> "}HERE</a>.
          </p>
        </div>
      </div>
      <h4
        style={{
          textAlign: "center",
          marginTop: "10px",
          marginLeft: "40px",
          fontSize: ".8em",
          fontFamily: "sans-serif",
        }}
      >
        copyright © 2022-2050{" "}
      </h4>
    </div>
  );
};

export default Footer;
