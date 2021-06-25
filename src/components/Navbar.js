import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../App";
import logo from "../images/logo.png";
const Navbar = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [user, setUser] = useContext(authContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 90) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div
      id="top"
      className={
        "w-full flex flex-col z-high  fixed  text-white pin-t pin-r pin-l shadow lg:shadow-none transition bg-gray-600 lg:bg-transparent" +
        (sticky ? "bg-gray-600 " : "")
      }
    >
      <nav
        id="site-menu"
        className="flex container mx-auto flex-col lg:flex-row w-full justify-between items-center px-4 lg:px-6 py-1 bg-transparent "
      >
        <div className="w-full lg:w-auto self-start lg:self-center flex flex-row lg:flex-none flex-no-wrap justify-between items-center">
          <a href="/" className="no-underline py-1">
            <img src={logo} alt="Logo" className="w-20" />
          </a>
          <button
            className={
              "block lg:hidden focus:outline-none " +
              (toggleClass ? "open" : "")
            }
            type="button"
            onClick={() => setToggleClass(!toggleClass)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={
            "w-full animate-fadeIn lg:animate-none lg:w-auto self-end lg:self-center lg:flex flex-col lg:flex-row items-center  py-1 pb-4 lg:py-0 lg:pb-0 " +
            (toggleClass ? " flex" : "hidden")
          }
        >
          <NavLink
            activeClassName="bg-gray-700"
            className="nav-link "
            to="/home"
            onClick={() => setToggleClass(false)}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="bg-gray-700"
            className="nav-link "
            to="/about"
            onClick={() => setToggleClass(false)}
          >
            About
          </NavLink>
          <NavLink
            activeClassName="bg-gray-700"
            className="nav-link "
            to="/blog"
            onClick={() => setToggleClass(false)}
          >
            Blog
          </NavLink>
          <NavLink
            activeClassName="bg-gray-700"
            className="nav-link "
            to="/contact"
            onClick={() => setToggleClass(false)}
          >
            Contact
          </NavLink>
          <NavLink
            activeClassName="bg-gray-700"
            className="nav-link "
            to="/dashboard"
            onClick={() => setToggleClass(false)}
          >
            Dashboard
          </NavLink>
          {user.status ? (
            <>
              <span className="text-lg capitalize">{user.firstName}</span>
              <button onClick={() => setUser({})} className="btn">
                logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                className="btn mb-2 lg:mb-0"
                to="/login"
                onClick={() => setToggleClass(false)}
              >
                Login
              </NavLink>
              <NavLink
                className="btn "
                to="/register"
                onClick={() => setToggleClass(false)}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
