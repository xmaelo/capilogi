import React from 'react'


export default function Footer(){
	return(
		<footer className="pt-5">
	        <div className="container pb-5">
	            <div className="footer-field row">
	                <div className="foot-about pb-2 pb-lg-0 mb-3 mb-lg-0 col-12 col-md-6 col-lg-4">
	                    <h4>
	                        <i className="fas fa-angle-double-right"></i>
	                        About Us
	                    </h4>
	                    <p className="pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aliquam quaerat commodi voluptatem ea soluta.</p>
	                    <div className="foot-social">
	                        <ul className="d-flex ps-0">
	                            <li className="px-2"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
	                            <li className="px-2"><a href="#"><i className="fab fa-twitter"></i></a></li>
	                            <li className="px-2"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
	                            <li className="px-2"><a href="#"><i className="fab fa-youtube"></i></a></li>
	                        </ul>
	                    </div>
	                </div>
	                <div className="foot-contact pb-2 pb-lg-0 mb-3 mb-lg-0 col-12 col-md-6 col-lg-4">
	                    <h4>
	                        <i className="fas fa-angle-double-right"></i>
	                        Contact Us
	                    </h4>
	                    <div className="footCont-link d-flex">
	                        <i className="fas fa-map-marker-alt"></i>
	                        <address className="mb-0">2737 Wilson Street , Carlsbad</address>
	                    </div>
	                    <div className="footCont-link d-flex">
	                        <i className="far fa-paper-plane"></i>
	                        <a href="#">inform@example.com</a>
	                    </div>
	                    <div className="footCont-link d-flex">
	                        <i className="fas fa-phone"></i>
	                        <a href="tel:#">512-454-7989</a>
	                    </div>
	                    <div className="subscribtion mt-3">
	                        <form action="#">
	                            <div className="sub-box">
	                                <input type="email" placeholder="Email" required/>
	                                <button type="submit">
	                                    Send
	                                    <i className="fas fa-location-arrow"></i>
	                                </button>
	                            </div>
	                        </form>
	                    </div>
	                </div>
	                <div className="foot-services pb-2 pb-lg-0 mb-3 mb-lg-0 col-12 col-md-6 col-lg-2">
	                    <h4>
	                        <i className="fas fa-angle-double-right"></i>
	                        Services
	                    </h4>
	                    <ul>
	                        <li><a href="#">Développement mobile</a></li>
	                        <li><a href="#">Développement web</a></li>
	                        <li><a href="#">Data engineering</a></li>
	                        <li><a href="#">Logiciel métier</a></li>
	                    </ul>
	                </div>
	                <div className="foot-Links pb-2 pb-lg-0 mb-3 mb-lg-0 col-12 col-md-6 col-lg-2">
	                    <h4>
	                        <i className="fas fa-angle-double-right"></i>
	                        Quick links
	                    </h4>
	                    <ul>
	                        <li><a href="#">Services</a></li>
	                        <li><a href="#">Projects</a></li>
	                        <li><a href="#">A Propos</a></li>
	                        <li><a href="#">Blog</a></li>
	                        <li><a href="#">Contact</a></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	        <div className="container">
	            <div className="copy-right d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
	                <p className="mb-3 mb-md-0 text-center">&copy; 2021 All Right Reserved , <b>Inform</b></p>
	                <div className="copyRight-links position-relative">
	                    <a className="mx-2" href="#">Privacy Policy</a>
	                    <span></span>
	                    <a className="mx-2" href="#"> Terms &amp; Conditions</a>
	                </div>
	            </div>
	        </div>
	    </footer>
	)
}