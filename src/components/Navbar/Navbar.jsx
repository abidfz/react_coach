import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="app__navbar_menu-large">
        <div className="app__navbar_menu-links">
          <Link
            className="app__navbar_menu-item"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offdet={-50}
            duration={500}
          >
            Accueil
          </Link>
          <Link
            className="app__navbar_menu-item"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offdet={-50}
            duration={500}
          >
            À propos
          </Link>
          <Link
            className="app__navbar_menu-item"
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offdet={-50}
            duration={500}
          >
            Tarifs
          </Link>
          <Link
            className="app__navbar_menu-item"
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offdet={-50}
            duration={500}
          >
            Témoignages
          </Link>
        </div>
        <div className="app__navbar_btn">Contact</div>
      </div>
      <div className="app__navbar_menu-small">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={26}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={26}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar_menu app__navbar_menu-open">
            <div className="app__navbar_menu-links">
              <Link
                className="app__navbar_menu-item"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offdet={-50}
                duration={500}
              >
                Accueil
              </Link>
              <Link
                className="app__navbar_menu-item"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offdet={-50}
                duration={500}
              >
                À propos
              </Link>
              <Link
                className="app__navbar_menu-item"
                activeClass="active"
                to=""
                spy={true}
                smooth={true}
                offdet={-50}
                duration={500}
              >
                Tarifs
              </Link>
              <Link
                className="app__navbar_menu-item"
                activeClass="active"
                to=""
                spy={true}
                smooth={true}
                offdet={-50}
                duration={500}
              >
                Témoignages
              </Link>
            </div>
            <div className="app__navbar_btn">Contact</div>
          </div>
        )}{" "}
      </div>
    </nav>
  );
};

export default Navbar;
