import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const nav = "inline-block md:m-2 -mb-2 p-1";
  const active = "inline-block md:m-2 -mb-2 font-medium text-white bg-imyt_blue p-1";
  return (
    <nav className="py-4 grid grid-cols-5">
      <div className="col-span-1 text-left">
        <NavLink to="/" className={nav}>
          <h1 className="font-black">IMYT.IO</h1>
        </NavLink>
      </div>
      <div className="col-span-4 text-right md:visible invisible">
        <NavLink to="/blog" className={nav} activeClassName={active}>
          <h1>Blog</h1>
        </NavLink>
        <NavLink to="/stack" className={nav} activeClassName={active}>
          <h1>Stack</h1>
        </NavLink>
        <NavLink to="/projects" className={nav} activeClassName={active}>
          <h1>Projects</h1>
        </NavLink>
        <NavLink to="/products" className={nav} activeClassName={active}>
          <h1>Products</h1>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
