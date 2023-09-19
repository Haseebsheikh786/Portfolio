import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <header>
        <h1>Haseeb Farrukh</h1>
        <p>Web Application Developer</p>
        <nav>
          <ul>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
