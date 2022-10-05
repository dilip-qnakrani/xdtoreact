import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
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
                        Home
                      </Link>
                    </li>
                    <li
                      className={`nav-item  ${
                        location.pathname === "/brands" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/brands"
                        id="navbarDropdownMenuLink-mainNav-33"
                      >
                        Brands
                      </Link>
                    </li>
                    <li
                      className={`nav-item  ${
                        location.pathname === "/monsters" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/monsters"
                        id="navbarDropdownMenuLink-mainNav-2"
                      >
                        Monsters
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
                        location.pathname === "/support" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/support"
                        id="navbarDropdownMenuLink-mainNav-3"
                      >
                        Support
                      </Link>
                    </li>
                    <li
                      className={`nav-item  ${
                        location.pathname === "/blog" ? "active" : ""
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to="/blog"
                        id="navbarDropdownMenuLink-mainNav-6"
                      >
                        On The Blog
                      </Link>
                    </li>

                    <li className="nav-item icons-item-menu">
                      <a
                        className="nav-link ml-4"
                        href="/"
                        id="navbarDropdownMenuLink-shop"
                        data-toggle="dropdown"
                      >
                        <img src="img/icons/icon-nav.png" alt="monsters"></img>
                      </a>
                      <div
                        className="dropdown-menu  dropdown-menu-right auth-dropdown menu-on-hover"
                        aria-labelledby="navbarDropdownMenuLink-shop"
                      >
                        <div className="drop-shop-block">
                          <a
                            className="nav-link"
                            href="/"
                            data-toggle="modal"
                            data-target="#Modal-signin"
                          >
                            <h6> Signin</h6>
                          </a>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="drop-shop-block">
                          <a
                            className="nav-link"
                            href="/"
                            data-toggle="modal"
                            data-target="#Modal-signup"
                          >
                            <h6>Signup</h6>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item icons-item-menu modal-search">
                      <a
                        className="nav-link"
                        href="/"
                        data-toggle="modal"
                        data-target="#Modal-language"
                        // aria-haspopup="true"
                        // aria-expanded="false"
                      >
                        <img src="img/icons/Group85.png" alt="monsters"></img>
                      </a>
                    </li>
                    <li className="nav-item icons-item-menu modal-search">
                      <a
                        className="nav-link"
                        href="/"
                        data-toggle="modal"
                        data-target="#Modal-search"
                      >
                        <i className="fa fa-search"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Search  */}
      <div
        className="modal fade default search-modal"
        id="Modal-search"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <input
                        type="search"
                        value=""
                        placeholder="Search"
                        className="form-control"
                        onChange={(e) => console.log(e.target.value)}
                      />
                      <button
                        className="btn btn-primary btn-icon btn-round"
                        type="submit"
                        value="search"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* language */}
      <div
        className="modal fade default search-modal"
        id="Modal-language"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-around language-modal-p">
                    <div className="col-md-2">
                      <p className="m-color">English</p>
                    </div>
                    <div className="col-md-2">
                      <p className="">Arabic</p>
                    </div>
                    <div className="col-md-2">
                      <p className="">French</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Signin */}
      <div
        className="modal fade default search-modal"
        id="Modal-signin"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-center language-modal-p">
                    <div className="col-12">
                      <div className="userAuthBrand py-5">
                        <a href="/">
                          <img
                            alt=""
                            src="img/Logo2.png"
                            className="m-auto d-block nLogo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="text-white">Sign In</h2>
                      <p className="text-white font-regular">
                        Don’t have an account yet?&nbsp;
                        <a
                          href="/"
                          className="text-white"
                          data-toggle="modal"
                          data-dismiss="modal"
                          data-target="#Modal-signup"
                        >
                          Sign up.
                        </a>
                      </p>

                      <div id="errors-list">
                        <input type="hidden" value="" name="error" />
                      </div>
                      <div id="sucessmsg"></div>
                      <form className="userAuthForm">
                        <div className="subscribe-box-1 mb-3">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                        <div className="subscribe-box-1 passwordInp mb-3">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          <input
                            type="hidden"
                            name="urlpage"
                            className="form-control"
                          />
                          <img
                            src="img/icons/lock.png"
                            className="passIcon"
                            alt=""
                          />
                        </div>

                        <div className="row mb-2">
                          <div className="col-6">
                            <div className="checkbox primary line-icon on-light">
                              <input
                                type="checkbox"
                                id="Stay"
                                name="remember_token"
                              />
                              <label htmlFor="Stay" className="text-white">
                                Stay Waking Up
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <p className="font-14 text-right">
                              <a
                                href="/"
                                className="text-white font-thin"
                                data-toggle="modal"
                                data-dismiss="modal"
                                data-target="#Modal-forgot"
                              >
                                Forgot your Password?
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="row mb-4">
                          <div className="col-12">
                            <input
                              type="submit"
                              value="Sign in"
                              className="btn btn-primary rounded-0 btn-round font-black btn-long mt-1 scroll w-100"
                            ></input>
                          </div>
                        </div>
                      </form>

                      <div className="">
                        <h2 className="text-white m-0 font-regular text-lighter">
                          If You Have The Gut
                        </h2>
                        <h2 className="text-white m-0 font-black">
                          Join The Fight!
                        </h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="authLogin_Art">
                        <img
                          src="img/Group359.png"
                          alt=""
                          className="d-block m-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Forgot your Password */}
      <div
        className="modal fade default search-modal"
        id="Modal-forgot"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content box-modal-height">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-center language-modal-p">
                    <div className="col-12">
                      <div className="userAuthBrand py-5">
                        <a href="/">
                          <img
                            alt=""
                            src="img/Logo2.png"
                            className="m-auto d-block nLogo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="text-white">Recover Your Account</h2>
                      <p className="text-white font-regular">
                        Enter email address to send a recovery email.
                      </p>

                      <div id="errors-list">
                        <input type="hidden" value="" name="error" />
                      </div>
                      <div id="sucessmsg"></div>
                      <form className="userAuthForm">
                        <div className="subscribe-box-1 mb-3">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>

                        <div className="row mb-4">
                          <div className="col-12">
                            <a
                              href="/"
                              data-toggle="modal"
                              data-dismiss="modal"
                              data-target="#Modal-recover"
                            >
                              <input
                                type="submit"
                                value="Recover Account"
                                className="btn btn-primary rounded-0 btn-round font-black btn-long mt-1 scroll w-100"
                              ></input>
                            </a>
                          </div>
                        </div>
                      </form>

                      <div className="d-flex">
                        <h2 className="text-white m-0 font-regular text-lighter">
                          Be
                        </h2>
                        &nbsp;
                        <h2 className="text-white m-0 font-black">Revived</h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="authLogin_Art">
                        <img
                          src="img/Group374.png"
                          alt=""
                          className="d-block m-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Signup */}
      <div
        className="modal fade default search-modal"
        id="Modal-signup"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content signin-box-height">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-center language-modal-p">
                    <div className="col-12">
                      <div className="userAuthBrand py-5">
                        <a href="/">
                          <img
                            alt=""
                            src="img/Logo2.png"
                            className="m-auto d-block nLogo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="text-white">Sign Up</h2>
                      <p className="text-white font-regular">
                        It’s fast and easy…
                      </p>

                      <div id="errors-list">
                        <input type="hidden" value="" name="error" />
                      </div>
                      <div id="sucessmsg"></div>
                      <form className="userAuthForm">
                        <div className="subscribe-box-1 mb-3">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                        <div className="subscribe-box-1 passwordInp mb-3">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          <input
                            type="hidden"
                            name="urlpage"
                            className="form-control"
                          />
                          <img
                            src="img/icons/lock.png"
                            className="passIcon"
                            alt=""
                          />
                        </div>

                        <div className="row mb-2">
                          <div className="col-12">
                            <div className="checkbox primary line-icon on-light">
                              <input
                                type="checkbox"
                                id="Acceptterm"
                                name="remember_token"
                              />
                              <label
                                htmlFor="Acceptterm"
                                className="text-white"
                              >
                                I Have Read And Accept Terms & Conditions
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="checkbox primary line-icon on-light">
                              <input
                                type="checkbox"
                                id="rememberMenavbar"
                                name="remember_token"
                              />
                              <label
                                htmlFor="rememberMenavbar"
                                className="text-white"
                              >
                                Send Me The Newsletter
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-4">
                          <div className="col-12">
                            <a
                              href="/"
                              data-toggle="modal"
                              data-dismiss="modal"
                              data-target="#Modal-confirm"
                            >
                              <input
                                type="submit"
                                value="Sign Up Now"
                                className="btn btn-primary rounded-0 btn-round font-black btn-long mt-1 scroll w-100"
                              ></input>
                            </a>
                          </div>
                        </div>
                      </form>

                      <div className="">
                        <h2 className="text-white m-0 font-regular text-lighter">
                          Enjoy
                        </h2>
                        <h2 className="text-white m-0 font-black">Hunting !</h2>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="authLogin_Art">
                        <img
                          src="img/Group369.png"
                          alt=""
                          className="d-block m-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sing Up Confirm  */}
      <div
        className="modal fade default search-modal"
        id="Modal-confirm"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content box-modal-height">
            {/* <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div> */}
            <div className="modal-body">
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="m-color-black box-modal text-center ">
                        <div className="modal-header justify-content-end">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true"></span>
                          </button>
                        </div>
                        <img
                          className="box-modal-img"
                          src="img/icons/emailbox.png"
                          alt=""
                        />
                        <p className="box-modal-title my-3">
                          Let’s Get Started!
                        </p>
                        <p className="box-modal-subtitle">
                          Personalize Your Skull <br /> Check Your Email
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recover accout  */}
      <div
        className="modal fade default search-modal"
        id="Modal-recover"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content box-modal-height">
            {/* <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div> */}
            <div className="modal-body">
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="m-bg-color box-modal text-center ">
                        <div className="modal-header justify-content-end">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true"></span>
                          </button>
                        </div>
                        <img
                          className="box-modal-img"
                          src="img/icons/emailbox.png"
                          alt=""
                        />
                        <p className="box-modal-title my-3">Go to</p>
                        <p className="box-modal-subtitle">
                          Open your email right away, you have only <br /> 15
                          minutes to recover your password
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
