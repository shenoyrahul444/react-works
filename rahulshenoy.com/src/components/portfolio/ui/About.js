import React from 'react';

const About = () => {
    return (
            <section id="about" className="s-about target-section">
                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full text-center">
                        <h1>More About Me</h1>
                        <p className="lead"> I am a software developer who likes to build intuitive software, analyze their perfomance, and develop strategies to enhance their capabilities.</p>
                    </div>
                </div>

                <div className="row about-content">
                    <div className="col-six tab-full left">
                        <h3>Howdy!</h3>

                        <p>I am currently pursuing my Masters at the University of Texas at Dallas. My major is Information Technology and Management, also known as MIS. I have previously worked as a Data Science Intern and a Product Marketing Intern at a Silicon Valley startup <a href="https://viewglass.com/">View Dynamic Glass</a>.</p>

                        <p>
                        Since my childhood, I have been a keen problem solver. I like to get to the bottom of things, see where they are going wrong, and then correct it. Nothing much has changed. Just that now I have bigger problems, where I make use of the data to understand where I went wrong and get to the bottom of things. </p>
                        
                        <p>Over the years, I have strived to develop my skills in web-technologies, data management, and data analysis domains. Learning new technologies every now and then, it is amazing to see how the world of technology moves so quickly. Well, I am here to make my mark. I'm here for the long run. </p>
                    </div>

                    <div className="col-six tab-full right">
                        <h3>My skills</h3>

                        <ul className="skill-bars">
                            <li>
                            <div className="progress percent90"><span>90%</span></div>
                            <strong>Python</strong>
                            </li>
                            <li>
                            <div className="progress percent70"><span>70%</span></div>
                            <strong>Javascript</strong>
                            </li>
                            <li>
                            <div className="progress percent75"><span>75%</span></div>
                            <strong>SQL</strong>
                            </li>   
                            <li>
                            <div className="progress percent70"><span>40%</span></div>
                            <strong>Hadoop/hive/pig</strong>
                            </li>
                            
                            <li>
                            <div className="progress percent40"><span>40%</span></div>
                            <strong>Spark/scala</strong>
                            </li>
                            
                            <li>
                            <div className="progress percent50"><span>50%</span></div>
                            <strong>Mongodb</strong>
                            </li>   
                        </ul>
                    </div>

                </div> 

                <div className="row about-content about-content--buttons">

                    <div className="col-six tab-full ">
                        <a href="#contact" className="smoothscroll btn btn--primary full-width">Hire me now</a>
                    </div>



                </div> 

                <div className="row about-content about-content--timeline">

                    <div className="col-full text-center">
                        <h3>My Work Experience.</h3>
                    </div>

                    <div className="col-six tab-full left">
                        <div className="timeline">

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <p className="timeline__timeframe">August 2017 - December 2017</p>
                                    <h3>View Dynamic Glass</h3>
                                    <h5>Data Science Intern</h5>
                                </div>
                                <div className="timeline__desc">
                                    <p>As a part of the Innovations team, I had developed a prototype for a web-based analytics platform to ingest, process, analyze, and visualize the product data, and indentify anomalous behavior.
                                    This was very instrumental in helping the Process Engineering Team indentify anomalous product behavious and do a rootcause analysis.It involved technologies like Python, MongoDB, NodeJS Express, AngularJS, JavaScript visualization libraries and Tableau.
                                    I also successfully integrated the application with a visual wiring tool(NodeRed) for providing API end-points and create a scalable software for IoT applications.</p>
                                </div>
                            </div> 

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <p className="timeline__timeframe">June 2017 - August 2017</p>
                                    <h3>View Dynamic Glass</h3>
                                    <h5>Product Marketing Intern</h5>
                                </div>
                                <div className="timeline__desc">	
                                    <p>I was tasked with the automation of Custom Value Proposition(CVP) reports and presentations for the Product Marketing Team. I developed scripts in VBA and developed macros to automate the generation of presentations. I also worked on Low Cost Calculation(LCCA) and Payback Analysis reports to understand more about the product.</p>
                                </div>
                            </div> 

                        </div> 
                    </div> 

                    <div className="col-six tab-full right">
                        <div className="timeline">

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <p className="timeline__timeframe">July 2016 - Present</p>
                                    <h3>EatPrayRead</h3>
                                    <h5>Founder and Developer</h5>
                                </div>
                                <div className="timeline__desc">
                                    <p>Eatprayread has been my pet project for several years now. I have worked on it end-to-end, ecompassing front-end, backend, database, analytics, publishing, writing, advertising and promotng aspects of a web based product. This project has given me a 360 degree view of a Product Manager. I also use a backend analytics program, along with Google Analytics and Google AdSense to look at the performance, and to drive montization strategies respectively.</p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div> 

            </section> 
    )
}

export default About;