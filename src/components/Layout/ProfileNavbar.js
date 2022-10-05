import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProfileNavbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const location = useLocation();

  return (
    <div>
      {/* Nav and Logo
	==================================================  */}

      <div
        id="menu-wrap"
        className={`cbp-af-header black-menu-background-1st-trans menu-fixed-padding menu-shadow ${
          scroll ? "cbp-af-header-shrink" : ""
        }`}
      >
        <div className="m-container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded">
                <button
                  className="navbar-toggler navbar-toggler-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavMenuMain"
                  aria-controls="navbarNavMenuMain"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">
                  <img src="img/Logo.png" alt="" className="" />
                </a>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavMenuMain"
                >
                  <ul className="navbar-nav">
                    <li
                      className={`nav-item  ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/"
                        id="navbarDropdownMenuLink-mainNav-1"
                      >
                        General
                      </Link>
                    </li>
                    <li
                      className={`nav-item  ${
                        location.pathname === "/profile" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/profile"
                        id="navbarDropdownMenuLink-mainNav-33"
                      >
                        Profile
                      </Link>
                    </li>
                    <li
                      className={`nav-item  ${
                        location.pathname === "/jobs" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/jobs"
                        id="navbarDropdownMenuLink-mainNav-2"
                      >
                        Jobs
                      </Link>
                    </li>
                    <li
                      className={`nav-item  ${
                        location.pathname === "/combat" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/combat"
                        id="navbarDropdownMenuLink-mainNav-5"
                      >
                        Combat
                      </Link>
                    </li>
                    <li
                      className={`nav-item  ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/"
                        id="navbarDropdownMenuLink-mainNav-3"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavbar;
