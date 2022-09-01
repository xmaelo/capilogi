import React from 'react'


export default function Hero(){
	return (
		<section className="home1 main-gradiant" id="home1">
	        <img className="frame" src="images/frame.svg" alt="background-frame"/>
	        <div className="container">
	            <div className="home1-field d-flex flex-column flex-lg-row align-items-center justify-content-between">
	                <div className="text">
	                    <h1>We Provide many IT &amp; Technology Services</h1>
	                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam voluptatibus quisquam quos aliquam voluptas pariatur cumque, quibusdam rerum obcaecati.</p>
	                    <div className="home-links">
	                        <a className="main-btn-3 mx-2" href="services-1.html">Our Services
	                            <i className="fas fa-angle-double-right"></i>
	                        </a>
	                        <a className="main-btn-4 mx-2" href="contact.html">Contact Us
	                            <i className="fas fa-angle-double-right"></i>
	                        </a>
	                    </div>
	                </div>
	                <div className="image ms-3 ms-lg-0">
	                    <img className="img-fluid w-100 mx-auto" src="images/home_slider/home-default.svg" alt="home image"/>
	                </div>
	            </div>
	        </div>
	    </section>
	)
}
