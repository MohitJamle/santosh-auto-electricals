import React from "react";
import "./Cars.css";

const Cars = (props) => {
  return (
    <div className="cars_list">
      {props.componeys &&
        props.componeys.map((comp) => (
          <div className="cars_listItem" key={comp.id}>
            <img
              className={`${props.isBrand && "brand"}`}
              src={comp.image}
              alt=""
            />
            <button>{comp.name}</button>
          </div>
        ))}
    </div>
  );
};

export default Cars;
