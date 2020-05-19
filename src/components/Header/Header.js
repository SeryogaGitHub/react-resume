import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Language from "./Language";

const Header = (props) => {
  return (
    <header className={"main-header"}>
      <div className="center">
        <div className="flex-container align-center">
          <nav className="navigation">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName={'active'}>Головна</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Портфоліо</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Контакти</NavLink>
              </li>
            </ul>
          </nav>

          {/*<Language/>*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
