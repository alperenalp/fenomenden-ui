import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header">
        <div className="logo" onClick={()=>{navigate("/")}}>
          <p>fenomenden.com</p>
        </div>
        <div className="search">
          <input placeholder="Fenomen Ara" /> <button>Ara</button>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/login">Giriş Yap</a>
            </li>
            <li>
              <a href="/add">İlan Ver</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
