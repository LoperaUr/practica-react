import React from "react";
import vite from "../public/vite.svg";

const Header = () => {
  return (
    <div>
      <header>
        <img src={vite} />
        <nav>
          <ul>
            <a href="#">Contacto</a>
            <a href="#">Contacto 2</a>
            <a href="#">Contacto 3</a>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
