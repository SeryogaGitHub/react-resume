import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
        <div id="main-header" data-page="contacts">
          <header>
            <div className="center">
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
            </div>
          </header>
        </div>
  );
};

export default Header;