import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="f6 lh-copy tracked">
      <ul style={{ display: "flex" }}>
        <li>
          <Link to="#">Sell on Lazamo</Link>
        </li>
        <li>
          <Link to="#">Customer Care</Link>
        </li>
        <li>
          <Link to="#">Track my Order</Link>
        </li>
        <li
          style={{
            margin: "0 1rem",
            borderRadius: "0 0 0 1rem",
            color: "white",
          }}
        >
          <Link to="#">Login</Link>
        </li>
        <li>
          <Link
            style={{
              margin: "0 1rem",
              borderRadius: "0 0 0 1rem",
              color: "white",
            }}
            to="#"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
