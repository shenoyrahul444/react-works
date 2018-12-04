import React from 'react';
// import background from "../assets/images/hero-bg.jpg";

const Home = () => {
    return (
       


   <section id="home" className="s-home page-hero target-section"  data-parallax="scroll" data-image-src="/assets/images/hero-bg.jpg" data-natural-width={2700} data-natural-height={2000} data-position-y="center">
       
            <div className="overlay"></div>
            <div className="shadow-overlay"></div>

                <div className="home-content">

                    <div className="row home-content__main">

                        <h3>Hello There</h3>

                        <h2>
                            I am Rahul Shenoy.
                            and I love developing software.
                        </h2>
                        

                        <div className="home-content__buttons">
                            <a href="#works" className="smoothscroll btn btn--stroke">
                                Latest Projects
                            </a>
                            <a href="#about" className="smoothscroll btn btn--stroke">
                                More About Me
                            </a>
                        </div>

                        <div className="home-content__scroll">
                            <a href="#about" className="scroll-link smoothscroll">
                                <span>Scroll Down</span>
                            </a>
                        </div>

                    </div>

                </div> 

            <ul className="home-social">
                <li>
                    <a href="https://www.facebook.com/shenoyrahul"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rahul-shenoy/"><i className="im im-linkedin" aria-hidden="true"></i><span>LinkedIn</span></a>
                </li>
                <li>
                    <a href="https://github.com/shenoyrahul444"><i className="im im-github" aria-hidden="true"></i><span>Github</span></a>
                </li>
                
            </ul> 
    </section> 

    )
}

export default Home;