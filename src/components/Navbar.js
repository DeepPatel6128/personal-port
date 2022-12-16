import React from "react";
import { BsBriefcaseFill, BsFillPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RiMailOpenFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [color, setColor] = useState("");
  const blueNav = () => {
    setColor("blueBack");
  };
  const redNav = () => {
    setColor("redBack");
  };
  const yellowNav = () => {
    setColor("yellowBack");
  };
  const pinkNav = () => {
    setColor("pinkBack");
  };
  return (
    <nav className={`navbar ${color}`}>
      <ul className="list">
        <Link to="/">
          <li className="list-item" onClick={blueNav}>
            <AiFillHome className="icon" />
          </li>
        </Link>
        <Link to="/about">
          <li className="list-item" onClick={redNav}>
            <BsFillPersonFill className="icon" />
          </li>
        </Link>
        <Link to="/portfolio">
          <li className="list-item" onClick={yellowNav}>
            <BsBriefcaseFill className="icon" />
          </li>
        </Link>
        <Link to="/contact">
          <li className="list-item" onClick={pinkNav}>
            <RiMailOpenFill className="icon" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
