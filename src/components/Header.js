
import React from 'react'


export default function Header(){
	//logo blanc sans fond

	function scrool(element, min) {
	  const Min = min ? min : 0
      const div = document.getElementById(element);
      window.scrollTo(0, (div.offsetTop - Min));
	 // var topPos = div.offsetTop;
	 // console.log('topPos', topPos)
  //     div.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
	return (
		<header className="shadow-sm">
	        <nav className="navbar-desktop d-none d-lg-block w-100">
	            <div className="container d-flex justify-content-between align-items-center position-relative">
	                <a className="navbar-brand p-0" href="/">
	                    
		                {/*<span className="branding">
		                	CAPILOGI
		                </span>*/}
		                <a className="navbar-brand p-0" href="/">
		                    <img src="images/logo/white_logo.png" alt="inform logo" className="logo" width="132" height="60"/>
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
	                            <a className="nav-link"  role="button" onClick={() => scrool('Services')}>
	                                Services
	                                {<i className="fas fa-chevron-down"></i>}
	                            </a>
	                            <ul className="dropdown-items ps-0">
	                                <li><a className="nav-item" role="button" onClick={() => scrool('Mobile', 95)}>Développement mobile</a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('Web', 95)}>Développement web</a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('BI', 95)}>Big data et BI</a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('IA', 95)}>Intelligence artificielle</a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('Metier', 95)}>Logiciel métier </a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('Recrutement', 95)}>Recrutement</a></li>
	                            </ul>
	                        </li>
	                        <li className="nav-item drop-cont" onClick={() => scrool("projects")}>
	                            <a className="nav-link"  role="button">
	                                Projets
	                                {/*<i className="fas fa-chevron-down"></i>*/}
	                            </a>
	                           {/* <ul className="dropdown-items ps-0">
	                              <li><a className="nav-item" href="project-1.html">Projects1</a></li>
	                              <li><a className="nav-item" href="project-2.html">Projects2</a></li>
	                              <li><a className="nav-item" href="project-details.html">Project Details</a></li>
	                            </ul>*/}
	                        </li>
	                        <li className="nav-item drop-cont">
	                            <a className="nav-link" role="button"  onClick={() => scrool('About')}>
	                            	A Propos
	                            	<i className="fas fa-chevron-down"></i>
	                            </a>
	                            <ul className="dropdown-items ps-0">
	                              <li><a className="nav-item" role="button" onClick={() => scrool('About')}>Métier</a></li>
	                              <li><a className="nav-item" role="button" onClick={() => scrool('Team')}>Équipe</a></li>
	                            </ul>
	                        </li>
	                        {/*<li className="nav-item drop-cont">
	                            <a className="nav-link"  role="button">
	                                Blog
	                                <i className="fas fa-chevron-down"></i>
	                            </a>
	                        </li>*/}
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" role="button"  onClick={() => scrool('Contact')}>Contact</a>
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
	                    <a className="main-btn-3 mx-2" target="_blank" href="https://calendly.com/contact_capilogi">
	                    	Discuter
	                    	<i className="fas fa-angle-double-right"></i>
	                    </a>
	                </div>
	            </div>
	        </nav>



	        <nav className="navbar-responsive d-block d-lg-none w-100">
	            <div className="container d-flex justify-content-between align-items-center position-relative">
	                <a className="navbar-brand p-0" href="index.html">
	                    <img src="images/logo/white_logo.png" alt="inform logo"/>
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
	                        <li className="nav-item drop-cont">
	                            <button className="nav-link"  >
	                                Services
	                                {<i className="fas fa-chevron-down"></i>}
	                            </button>
	                            <ul className="dropdown-items ps-0">
	                                <li><a className="nav-item" role="button" onClick={() => scrool('Mobile', 95)}>Développement mobile</a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('Web', 95)}>Développement web</a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('BI', 95)}>Big data et BI</a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('IA', 95)}>Intelligence artificielle</a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('Metier', 95)}>Logiciel métier </a></li>
	                                <li><a className="nav-item" role="button" onClick={() => scrool('Recrutement', 95)}>Recrutement</a></li>
	                            </ul>
	                        </li>
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" role="button" onClick={() => scrool("projects")} >Projets</a>
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
	                        <li className="nav-item drop-cont">
	                            
	                            <button className="nav-link">
	                                A Propos
	                                {<i className="fas fa-chevron-down"></i>}
	                            </button>
	                            <ul className="dropdown-items ps-0">
	                              <li><a className="nav-item" role="button" onClick={() => scrool('About')}>Métier</a></li>
	                              <li><a className="nav-item" role="button" onClick={() => scrool('Team')}>Équipe</a></li>
	                            </ul>
	                        </li>
	                        
	                        <li className="nav-item mx-1">
	                            <a className="nav-link" role="button"  onClick={() => scrool('Contact')}>Contact</a>
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
