import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [cmsMenuAreaExpanded, setCmsMenuAreaExpanded] = useState(false);
    const [cmsMenuDisplayClass, setCmsMenuDisplayClass] = useState('');
    const handleCmsMenuDisplay = () => {
        setCmsMenuAreaExpanded(!cmsMenuAreaExpanded);
        if(cmsMenuDisplayClass === '')
        {
            setCmsMenuDisplayClass('show');
        } else {
            setCmsMenuDisplayClass('');
        }
    }
    return (
        <Fragment>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Shop Insurance</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News &amp; Resources</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">MSH Global</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact us</a>
                </li>
                <li className={`nav-item dropdown ${cmsMenuDisplayClass}`}>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" onClick={handleCmsMenuDisplay} aria-expanded={cmsMenuAreaExpanded}>
                        CMS <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </a>
                    <div className={`dropdown-menu ${cmsMenuDisplayClass}`} aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/product-category-listing">Product Category</Link>
                        <a className="dropdown-item" href="#">Products</a>
                        <a className="dropdown-item" href="#">Recommendation Wizard</a>
                        <a className="dropdown-item" href="#">Page content and attributes</a>
                        <a className="dropdown-item" href="#">User Management</a>
                        <a className="dropdown-item" href="#">Role Management</a>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}

export default NavBar;