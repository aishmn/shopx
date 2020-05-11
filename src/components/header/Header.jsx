import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      SHOPX
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
