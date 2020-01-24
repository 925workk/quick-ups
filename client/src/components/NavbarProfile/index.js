import React from 'react';

const NavbarProfile = () => {
    return (
        <div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <a className="navbar-brand" href="/">QuickUps</a>
            <ul className="nav navbar-nav flex-row float-left">
                <li className="nav-item"><a className="nav-link pr-4 active" href="/">Post a Pickup</a></li>
                <li className="nav-item"><a className="nav-link pr-4" href="/profile">Claim a Pickup</a></li>
                <li className="nav-item"><a className="nav-link pr-4" href="saved">Profile</a></li>
            </ul>
            </div>
        </nav>
    </div>
    )
}
export default NavbarProfile;