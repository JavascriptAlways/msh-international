import React, { Fragment, useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { LogoUrl } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import { logout } from "../redux/auth/auth.actions";
import isEmpty from "../isEmpty";

function Header(props) {
  const [loginDropdownAreaExpanded, setLoginDropdownAreaExpanded] = useState(
    false
  );
  const [loginDropdownDisplayClass, setLoginDropdownDisplayClass] = useState(
    ""
  );
  const handleLoginDropdownDisplay = () => {
    setLoginDropdownAreaExpanded(!loginDropdownAreaExpanded);
    if (loginDropdownDisplayClass === "") {
      setLoginDropdownDisplayClass("show");
    } else {
      setLoginDropdownDisplayClass("");
    }
  };

  const { token } = useSelector((state) => {
    return state.auth;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null || isEmpty(token) || token === "undefined") {
      window.location.href = "./login";
    }
  }, [token]);

  return (
    <Fragment>
      <ToastsContainer
        store={ToastsStore}
        position={ToastsContainerPosition.TOP_RIGHT}
      />
      <div className="alert alert-danger fade in">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <p>
          Our Promise to you During Covid-19{" "}
          <span className="bg-arrow-wht">
            <img src="images/arrow-wht.png" alt="arrow" />
          </span>
        </p>
      </div>

      <div className="navigation-section">
        <div className="container-fluid">
          <div className="top-main-header">
            <div className="logo">
              <Link to="/">
                <img src={LogoUrl} alt="logo" />
              </Link>
            </div>
            <div className="top-left-sec">
              <ul className="navbar-nav">
                <li
                  className={`nav-item dropdown ${loginDropdownDisplayClass}`}
                >
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={handleLoginDropdownDisplay}
                  >
                    <span className="set-user-bg">
                      <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                    </span>{" "}
                    <span className="set-user-cont">
                      Neeraj
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </Link>
                  <div
                    className={`dropdown-menu ${loginDropdownDisplayClass}`}
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        dispatch(logout());
                      }}
                    >
                      Logout
                    </Link>
                  </div>
                </li>
                <li>
                  <ul className="navbar-nav">
                    <li>
                      <Link>EN</Link>
                    </li>
                    <li>
                      <Link>FR</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="navigation">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <NavBar />
                  <div className="top-nav-rht-sec">
                    <form className="form-inline ">
                      <button className="btn submit-top-btn" type="submit">
                        Search{" "}
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                      <input
                        className="form-control"
                        type="search"
                        placeholder=""
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
