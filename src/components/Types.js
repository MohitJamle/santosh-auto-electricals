import React from "react";

const Types = () => {
  return (
    <>
      <div className="body_listItem">
        <h3>long vehicles</h3>
        <img src="/Images/Bus.png" className="icon" alt="" />
        <img className="vid" src="/Gif/Bus.gif" alt="" />
      </div>
      <div className="body_listItem">
        <h3>Car's</h3>
        <img src="/Images/Car.png" alt="" />
        <img className="vid" src="/Gif/Car.gif" alt="" />
      </div>
      <div className="body_listItem">
        <h3>MotorBikes</h3>
        <img src="/Images/Bike.png" alt="" />
        <img className="vid" src="/Gif/Bike.gif" alt="" />
      </div>
      <div className="body_listItem">
        <h3>Inverter</h3>
        <img className="icon" src="/Gif/Inverter.png" alt="" />
        <img className="vid" src="/Gif/Inverter.gif" alt="" />
      </div>
    </>
  );
};

export default Types;
