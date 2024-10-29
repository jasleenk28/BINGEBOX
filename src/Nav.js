import React, { useState, useEffect } from "react";
import BingeBoxLogo from "./BINGEBOXk.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <img class="nav_logo" src={BingeBoxLogo} alt="logo" />
    </div>
  );
}

export default Nav;
