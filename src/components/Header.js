import React, { Fragment } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import {LogoUrl} from '../constants';

function Header() {
    return (
        <Fragment>
            <div className="alert alert-danger fade in">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <p>Our Promise to you During Covid-19 <span className="bg-arrow-wht"><img src="images/arrow-wht.png" /></span></p>

            </div>

            <div className="navigation-section">
                <div className="container-fluid">
                    <div className="top-main-header">
                        <div className="logo"><Link to="/"><img src={LogoUrl} /></Link></div>
                        <div className="top-left-sec">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="set-user-bg"><i className="fa fa-user-o" aria-hidden="true"></i> </span> <span className="set-user-cont">Neeraj<i className="fa fa-angle-down" aria-hidden="true"></i></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">dummy text</a>
                                        <a className="dropdown-item" href="#">dummy text</a>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                                <li>
                                    <ul className="navbar-nav">
                                        <li><a href="">EN</a></li>
                                        <li><a href="">FR</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="navigation">
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                                    <NavBar />
                                    <div className="top-nav-rht-sec">
                                        <form className="form-inline ">
                                            <button className="btn submit-top-btn" type="submit">Search <i className="fa fa-search" aria-hidden="true"></i></button>
                                            <input className="form-control" type="search" placeholder="" aria-label="Search" />
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