import React from 'react';
// import logo from '../assets/images/logo.png';


const Header = () => {
    return (
            <header className="s-header">
                    <div className="header-logo">
                        <a className="site-logo" href="index.html"><img src="/assets/images/logo.png" alt="Homepage" /></a>
                    </div>

                    <nav className="header-nav-wrap">
                        <ul className="header-nav">
                            <li className="current"><a className="smoothscroll"  href="#home" title="home">Home</a></li>
                            <li><a className="smoothscroll"  href="#about" title="about">About</a></li>
                            <li><a  href="https://www.linkedin.com/in/rahul-shenoy/" title="works">LinkedIn</a></li>
                            <li><a  href="https://github.com/shenoyrahul444" title="works">GitHub</a></li>
                            <li><a  href="http://www.eatprayread.com" title="blog">Blog</a></li>
                            <li><a className="smoothscroll"  href="#contact" title="contact">Contact</a></li>
                        </ul>
                    </nav>

            <a className="header-menu-toggle" href="#0"><span>Menu</span></a>

            </header>
    )
}
export default Header;