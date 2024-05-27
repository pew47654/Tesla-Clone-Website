import React from "react";
import "./Navbar.css";
import logo_name from "../../assets/logo/tesla_name.png";
import HelpIcon from "@mui/icons-material/Help";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <div className="nav">
      <img src={logo_name} alt="" className="logo" />

      <ul className="list">
        <li>Vehicles</li>
        <li>Energy</li>
        <li>Charging</li>
        <li>Discover</li>
        <li>Shop</li>
      </ul>

      <ul className="icon">
        <li>
          <HelpIcon />
        </li>
        <li>
          <LanguageIcon />
        </li>
        <li>
          <AccountCircleIcon />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
