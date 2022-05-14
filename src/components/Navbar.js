import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
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
        {show && (
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Links</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
      <IconButton onClick={() => setShow(!show)}>
        <Menu />
      </IconButton>
    </nav>
  );
};

export default Navbar;
