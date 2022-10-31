import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const nav = "inline-block md:m-2 -mb-2 p-1";
  const active =
    "inline-block md:m-2 -mb-2 font-medium text-white bg-imyt_blue p-1";
  return (
    <nav className="py-4 flex">
      <div className="text-left flex-none">
        <NavLink to="/" className="md:m-2 -mb-2 inline-block py-1">
          <h1 className="font-black">IMYT.IO</h1>
        </NavLink>
      </div>
      <div className="grow text-right md:visible invisible">
        <NavLink to="/blog" className={nav} activeClassName={active}>
          <h1>Blog</h1>
        </NavLink>
        <NavLink to="/stack" className={nav} activeClassName={active}>
          <h1>Stack</h1>
        </NavLink>
        <NavLink to="/bets" className={nav} activeClassName={active}>
          <h1>Bets</h1>
        </NavLink>
        <NavLink to="/products" className={nav} activeClassName={active}>
          <h1>Products</h1>
        </NavLink>
        {/* <button onClick={() => {changeLocale('hk')}}>Lang</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
