import React, { useEffect } from "react";
import "./Detail.css";

const Detail = () => {
  useEffect(() => {
    document.getElementById("backdrop").style.display = "inline";
  }, []);

  return (
    <div className="detail_container">
      <h1 className="detail_heading">Battery Available for you</h1>
      <div className="detail_cardContainer">
        <div className="detail_card">
          <img src="/Images/ExideBattery.png" alt="" />
          <h2>Exide Tractor Battery</h2>
        </div>
        <div className="detail_card">
          <img src="/Images/ExideBattery.png" alt="" />
          <h2>Exide Tractor Battery</h2>
        </div>
        <div className="detail_card">
          <img src="/Images/ExideBattery.png" alt="" />
          <h2>Exide Tractor Battery</h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
