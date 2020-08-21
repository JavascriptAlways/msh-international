import React, { Fragment, useState } from 'react';

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
                        <a className="dropdown-item" href="product-category-listing.html">Product Category</a>
                        <a className="dropdown-item" href="product-listing.html">Products</a>
                        <a className="dropdown-item" href="recommendation-wizard-listing.html">Recommendation Wizard</a>
                        <a className="dropdown-item" href="screen-listing.html">Page content and attributes</a>
                        <a className="dropdown-item" href="user-listing.html">User Management</a>
                        <a className="dropdown-item" href="role-listing.html">Role Management</a>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}

export default NavBar;