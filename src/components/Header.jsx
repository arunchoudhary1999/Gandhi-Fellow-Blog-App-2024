import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  // change nav color when scrolling
  const [color, setColor] = useState(true);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(false);
    } else {
      setColor(true);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "nav" : "nav nav-bg"}>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNavHandler}>
          <img src={logo} alt="Navbar Logo"></img>
        </Link>
        {isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link to="/profile/sdfsdf" onClick={closeNavHandler}>
                Ernest Achiever
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNavHandler}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNavHandler}>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNavHandler}>
                Logout
              </Link>
            </li>
          </ul>
        )}

        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </div>
  );
};

export default Header;
