import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/pokemon"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Lista de Pokemones
      </NavLink>
    </nav>
  );
}

export default Navbar;
