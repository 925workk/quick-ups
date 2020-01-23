import React from 'react';

const Footer = () => {
    return (
        <div>
                <div className="container">
                <a className="navbar-brand" href="/">QuickUps</a>
                <ul className="nav navbar-nav flex-row float-left">
                    <li className="footer-item"><a className="footer-link pr-4 active" href="/">Home</a></li>
                    <li className="footer-item"><a className="footer-link pr-4" href="https://github.com/925work/quick-ups">GitHub Repo</a></li>
                    <li className="footer-item"><a className="footer-link pr-4" href="saved">Login</a></li>
                </ul>
                </div>
        </div>
    )
}
export default Footer;