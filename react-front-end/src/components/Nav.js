import React from "react";
import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <img className="logo-img" src={logo} alt={logo} />
      </div>
    </nav>
  );
}
