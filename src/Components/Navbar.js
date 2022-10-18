import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const nav = "inline-block m-2";
  return (
    <nav className="py-4 grid grid-cols-5">
      <div className="col-span-1 text-left">
        <NavLink to="/" className={nav}>
          <h1 className="font-black">IMYT.IO</h1>
        </NavLink>
      </div>
      <div className="col-span-4 text-right md:visible invisible">
        <NavLink to="/about" className={nav}>
          <h1>About</h1>
        </NavLink>
        <NavLink to="/stack" className={nav}>
          <h1>Talent & Skill Stack</h1>
        </NavLink>
        <NavLink to="/projects" className={nav}>
          <h1>Projects</h1>
        </NavLink>
        <NavLink to="/products" className={nav}>
          <h1>Products</h1>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
