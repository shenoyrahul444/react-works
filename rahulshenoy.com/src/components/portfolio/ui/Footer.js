import React from 'react';
// import logo from '../assets/images/logo.png';
const Footer = () => {
    return (
         <footer>
        <div className="row">
            <div className="col-full">

                <div className="footer-logo">
                    <a className="footer-site-logo" href="#0"><img src="/assets/images/logo.png" alt="Homepage" /></a>
                </div>

                <ul className="footer-social">
                    <li><a href="https://www.facebook.com/shenoyrahul">
                        <i className="im im-facebook" aria-hidden="true"></i>
                        <span>Facebook</span>
                    </a></li>
                    <li><a href="https://github.com/shenoyrahul444">
                        <i className="im im-github" aria-hidden="true"></i>
                        <span>GitHub</span>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/rahul-shenoy/">
                        <i className="im im-linkedin" aria-hidden="true"></i>
                        <span>LinkedIn</span>
                    </a></li>
                    <li><a href="https://twitter.com/theShenoyBoy">
                        <i className="im im-twitter" aria-hidden="true"></i>
                        <span>Twitter</span>
                    </a></li>
                </ul>
                    
            </div>
        </div>
    </footer>

    )
}

export default Footer;