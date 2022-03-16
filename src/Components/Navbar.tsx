import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
      <div className="nav-wrapper purple darken-2 px1">
          <NavLink to="/" className="brand-logo">React + TS</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/todo" activeClassName="blue">Список дел</NavLink></li>
              <li><NavLink to="/about" activeClassName="blue">Информация</NavLink></li>
          </ul>
      </div>
  </nav>
);