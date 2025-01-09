import "./style.css";
import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <h1>S & K Motors</h1>
          <ul>
            <Link href="./">
              <li>Home</li>
            </Link>
            <Link href="./Cars">
              <li>Cars</li>
            </Link>
            <Link href="./Pricing">
              <li>Pricing</li>
            </Link>
            <Link href="./About">
              <li>About</li>
            </Link>
          </ul>
          <div className="buttons">
          <button>Contact</button>
          <button>Rent</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
