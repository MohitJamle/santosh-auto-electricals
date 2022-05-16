import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [shown, handleshow] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 560) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${shown && "nav_black"}`}>
      <img src="/logo192.png" alt="" />
      <div className="nav_menu">
        <ul style={show ? { opacity: "1" } : { opacity: "0" }}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/22%C2%B038'47.6%22N+75%C2%B049'36.6%22E/@21.9539524,76.6055507,7.26z/data=!4m5!3m4!1s0x0:0x15531329fbe4e7fb!8m2!3d22.6465635!4d75.8268207">
              Location
            </a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <IconButton onClick={() => setShow(!show)}>
        <Hamburger />
      </IconButton>
    </nav>
  );
};

export default Navbar;
