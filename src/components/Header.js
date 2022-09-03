
import React from 'react'


export default function Header(){
	//logo blanc sans fond
	return (
		<header className="shadow-sm">
	        <nav className="navbar-desktop d-none d-lg-block w-100">
	            <div className="container d-flex justify-content-between align-items-center position-relative">
	                <a className="navbar-brand p-0" href="index.html">
	                    
		                {/*<span className="branding">
		                	CAPILOGI
		                </span>*/}
		                <a class="navbar-brand p-0" href="/">
		                    <img src="images/logo/1.png" alt="inform logo"/>
		                </a>
	                </a>
	                <div className="ul-cont justify-content-center">
	                    <ul className="navbar-nav d-flex flex-row justify-content-start mb-2 mb-lg-0">
	                        {/*<li className="nav-item drop-cont">
	                            <a className="nav-link" href="#" role="button">
	                                Home
	                                <i className="fas fa-chevron-down"></i>
	                            </a>
	                            <ul className="dropdown-items ps-0">
	                              <li><a className="nav-item active" href="index.html">Home1</a></li>
	                              <li><a className="nav-item" href="index-1.html">Home2</a></li>
	                            </ul>
	                        </li>*/}
	                        
	                        <li className="nav-item drop-cont">
	                            <a className="nav-link" href="#" role="button">
	                                Services
	                                {/*<i className="fas fa-chevron-down"></i>*/}
	                            </a>
	                            {/*<ul className="dropdown-items ps-0">
	                                <li><a className="nav-item" href="services-1.html">Services1</a></li>
	                                <li><a className="nav-item" href="services-2.html">Services2</a></li>
	                                <li><a className="nav-item" href="services-details.html">Service Details</a></li>
	                            </ul>*/}
	                        </li>
	                        <li className="nav-item drop-cont">
	                            <a className="nav-link" href="#" role="button">
	                                Projects
	                                {/*<i className="fas fa-chevron-down"></i>*/}
	                            </a>
	                           {/* <ul className="dropdown-items ps-0">
	                              <li><a className="nav-item" href="project-1.html">Projects1</a></li>
	                              <li><a className="nav-item" href="project-2.html">Projects2</a></li>
	                              <li><a className="nav-item" href="project-details.html">Project Details</a></li>
	                            </ul>*/}
	                        </li>
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" href="about.html">A Propos</a>
	                        </li>
	                        <li className="nav-item drop-cont">
	                            <a className="nav-link" href="#" role="button">
	                                Blog
	                                {/*<i className="fas fa-chevron-down"></i>*/}
	                            </a>
	                            {/*<ul className="dropdown-items ps-0">
	                              <li><a className="nav-item" href="blog.html">Blog</a></li>
	                              <li><a className="nav-item" href="blog-sidebar.html">Blog Sidebar</a></li>
	                              <li><a className="nav-item" href="blog-details.html">Blog Details</a></li>
	                            </ul>*/}
	                        </li>
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" href="contact.html">Contact</a>
	                        </li>
	                        {/*<li className="nav-item drop-cont">
	                            <a className="nav-link" href="#" role="button">
	                                Pages
	                                <i className="fas fa-chevron-down"></i>
	                            </a>
	                            <ul className="dropdown-items ps-0">
	                              <li><a className="nav-item" href="team.html">Team</a></li>
	                              <li><a className="nav-item" href="pricing.html">Pricing</a></li>
	                              <li><a className="nav-item" href="faq.html">FAQ</a></li>
	                              <li><a className="nav-item" href="testimonials.html">Testimonials</a></li>
	                              <li><a className="nav-item" href="coming-soon.html">Coming Soon</a></li>
	                              <li><a className="nav-item" href="404.html">404 Page</a></li>
	                            </ul>
	                        </li>*/}
	                    </ul>
	                </div>
	                <div className="">
	                    <a className="main-btn-3 mx-2" href="#">
	                    	Discuter
	                    	<i className="fas fa-angle-double-right"></i>
	                    </a>
	                </div>
	            </div>
	        </nav>
	        <nav className="navbar-responsive d-block d-lg-none w-100">
	            <div className="container d-flex justify-content-between align-items-center position-relative">
	                <a className="navbar-brand p-0" href="index.html">
	                    <img src="images/logo/1.png" alt="inform logo"/>
	                </a>
	                <div className="ul-cont justify-content-center ms-auto">
	                    <ul className="navbar-nav mb-2 mb-lg-0">
	                        {/*<li className="nav-item drop-cont">
	                            <button className="nav-link">
	                                Home
	                                <i className="fas fa-chevron-down"></i>
	                            </button>
	                            <ul className="dropdown-items ps-0">
	                                <li><a className="nav-item" href="index.html">Home1</a></li>
	                                <li><a className="nav-item" href="index-1.html">Home2</a></li>
	                            </ul>
	                        </li>*/}
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" href="about.html">Services</a>
	                        </li>
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" href="about.html">Projets</a>
	                        </li>
	                        {/*<li className="nav-item drop-cont">
	                            <button className="nav-link">
	                                Services
	                                <i className="fas fa-chevron-down"></i>
	                            </button>
	                            <ul className="dropdown-items ps-0">
	                                <li><a className="nav-item" href="services-1.html">Services1</a></li>
	                                <li><a className="nav-item" href="services-2.html">Services2</a></li>
	                                <li><a className="nav-item" href="services-details.html">Service Details</a></li>
	                            </ul>
	                        </li>*/}
	                        {/*<li className="nav-item drop-cont">
	                            <button className="nav-link">
	                                Projects
	                                <i className="fas fa-chevron-down"></i>
	                            </button>
	                            <ul className="dropdown-items ps-0">
	                                <li><a className="nav-item" href="project-1.html">Projects1</a></li>
	                                <li><a className="nav-item" href="project-2.html">Projects2</a></li>
	                                <li><a className="nav-item" href="project-details.html">Project Details</a></li>
	                            </ul>
	                        </li>
	                        <li className="nav-item drop-cont">
	                            <button className="nav-link">
	                                Blog
	                                <i className="fas fa-chevron-down"></i>
	                            </button>
	                            <ul className="dropdown-items ps-0">
	                                <li><a className="nav-item" href="blog.html">Blog</a></li>
	                                <li><a className="nav-item" href="blog-sidebar.html">Blog Sidebar</a></li>
	                                <li><a className="nav-item" href="blog-details.html">Blog Details</a></li>
	                            </ul>
	                        </li>*/}
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" href="about.html">A Propos</a>
	                        </li>
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" href="contact.html">Contact</a>
	                        </li>
	                        {/*<li className="nav-item drop-cont">
	                            <button className="nav-link">
	                                Pages
	                                <i className="fas fa-chevron-down"></i>
	                            </button>
	                            <ul className="dropdown-items ps-0">
	                                <li><a className="nav-item" href="team.html">Team</a></li>
	                                <li><a className="nav-item" href="pricing.html">Pricing</a></li>
	                                <li><a className="nav-item" href="faq.html">FAQ</a></li>
	                                <li><a className="nav-item" href="testimonials.html">Testimonials</a></li>
	                                <li><a className="nav-item" href="coming-soon.html">Coming Soon</a></li>
	                                <li><a className="nav-item" href="404.html">404 Page</a></li>
	                            </ul>
	                        </li>*/}
	                    </ul>
	                </div>
	                <button className="menu-toggle-button d-block d-lg-none" type="button">
	                    <span className="header-nav-icon"></span>
	                    <span className="header-nav-icon"></span>
	                    <span className="header-nav-icon"></span>
	                </button>
	            </div>
	        </nav>
	    </header>
	)
}
