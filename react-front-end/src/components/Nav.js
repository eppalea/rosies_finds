import React from "react";
import logo from "../assets/logo-image.png";
import title from "../assets/company-title.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  navList: {
    color: "#c38e70",
    textDecoration: "none",
    marginRight: "10px",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <nav>
      <div className="logo">
        <img className="logo-img" src={logo} alt={logo} />
        <img className="logo-img" src={title} alt={title} />
      </div>
      <ul className="nav-links">
        <Link className={classes.navList} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.navList} to="/items">
          <li>Household Decor</li>
        </Link>
        <Link className={classes.navList} to="/sales">
          <li>Sales</li>
        </Link>
        <Link className={classes.navList} to="/about">
          <li>About</li>
        </Link>
        <Link className={classes.navList} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
