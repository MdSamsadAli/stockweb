import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import { navbar } from "../data/Data";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const navbaropen = () => {
    setToggleNav(!toggleNav);
  };

  const location = useLocation();
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary">
              <i className="fas fa-search-dollar me-3"></i>Stocker
            </h1>
          </Link>
          <button className="navbar-toggler" type="button" onClick={navbaropen}>
            <span className="fa fa-bars"></span>
          </button>
          <div
            className={`${
              toggleNav ? "collapsed" : "collapse navbar-collapse"
            }`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto py-0">
              {navbar.map((val, index) => (
                <>
                  {val.page ? (
                    <div className="nav-item dropdown" key={index}>
                      <Link
                        to={val.path}
                        className="nav-link"
                        data-bs-toggle="dropdown"
                      >
                        <span className="dropdown-toggle">{val.nav}</span>
                      </Link>
                      <div className="dropdown-menu m-0">
                        {val.page.map((submenu, key) => (
                          <Link
                            to={submenu.path}
                            key={key}
                            className="dropdown-item"
                          >
                            {submenu.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={val.path}
                      className={`nav-item nav-link ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      {val.nav}
                    </Link>
                  )}
                </>
              ))}
            </div>
            <Link
              to="/"
              className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {location.pathname === "/" && <BannerSlider />}
      </div>
    </>
  );
};

export default Header;
