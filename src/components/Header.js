import React, { CSSProperties } from "react";
import logo from "../images/bezdomniaki_logo.jpeg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo bezdomniaków" className="header__img" />
      <div className="header__title">
        <span>F</span>
        <span>u</span>
        <span>n</span>
        <span>d</span>
        <span>a</span>
        <span>c</span>
        <span>j</span>
        <span>a</span>
      </div>
      <div className="header__title">
        <span>B</span>
        <span>e</span>
        <span>z</span>
        <span>d</span>
        <span>o</span>
        <span>m</span>
        <span>n</span>
        <span>i</span>
        <span>a</span>
        <span>k</span>
        <span>i</span>
      </div>
    </header>
  );
}
