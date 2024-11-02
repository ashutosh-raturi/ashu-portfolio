import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [showNavOptions, setShowNavOptions] = useState(false);
  const navOptionsRef = useRef(null);
  const blue = "text-[var(--medium-blue)]";
  const black = "text-[var(--charcoal-black)]";

  useEffect(() => {
    if (showNavOptions) {
      navOptionsRef?.current?.classList?.add("flex");
      navOptionsRef?.current?.classList?.remove("hidden");
    } else {
      navOptionsRef?.current?.classList?.add("hidden");
    }
  }, [showNavOptions]);

  const heading = (
    <h1 className="cursor-pointer text-custom-charcoal font-black text-sm lg:text-xl">
      Ashutosh Raturi
      <span className="text-custom-soft-black font-light text-xs lg:text-lg">
        &nbsp; / UI ENGINEER
      </span>
    </h1>
  );

  const navOptions = (
    <ul
      ref={navOptionsRef}
      className="nav-options list-none hidden justify-evenly items-center flex-col w-full md:flex-row md:w-[70%] md:flex"
    >
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `custom-navlink p-2 md:p-0 ${isActive ? blue : black}`
          }
        >
          Welcome
        </NavLink>
      </li>
      <li>
        <NavLink
          to="my-journey"
          className={({ isActive }) =>
            `custom-navlink p-2 md:p-0 ${isActive ? blue : black}`
          }
        >
          My Journey
        </NavLink>
      </li>
      <li>
        <NavLink
          to="my-learning-path"
          className={({ isActive }) =>
            `custom-navlink p-2 md:p-0 ${isActive ? blue : black}`
          }
        >
          My Learning Path
        </NavLink>
      </li>
      <li>
        <NavLink
          to="achievements"
          className={({ isActive }) =>
            `custom-navlink p-2 md:p-0 ${isActive ? blue : black}`
          }
        >
          Achienvements
        </NavLink>
      </li>
      <li>
        <NavLink
          to="tech-arsenal"
          className={({ isActive }) =>
            `custom-navlink p-2 md:p-0 ${isActive ? blue : black}`
          }
        >
          Tech Arsenal
        </NavLink>
      </li>
    </ul>
  );

  const menuIcon = (
    <div
      onClick={() => setShowNavOptions(true)}
      className="md:hidden absolute top-3 right-2"
    >
      <ion-icon size="large" name="menu-outline"></ion-icon>
    </div>
  );

  const closeIcon = (
    <div
      onClick={() => setShowNavOptions(false)}
      className="md:hidden absolute top-3 right-2"
    >
      <ion-icon size="large" name="close-outline"></ion-icon>
    </div>
  );

  return (
    <header>
      <nav className="p-4">
        <div className="nav-container flex justify-between flex-col md:flex-row items-center">
          {heading}
          {navOptions}
          {showNavOptions ? closeIcon : menuIcon}
        </div>
      </nav>
    </header>
  );
};
