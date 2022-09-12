import React from 'react'


export default function Hero(){
	function scrool(element) {
      const div = document.getElementById(element);
      window.scrollTo(0, (div.offsetTop - 90));
    }
	return (
		<section className="home1 main-gradiant" id="home1">
	        <img className="frame" src="images/frame.svg" alt="background-frame"/>
	        <div className="container">
	            <div className="home1-field d-flex flex-column flex-lg-row align-items-center justify-content-between">
	                <div className="text">
	                	<div class="swiper title-slider">
						    <div class="swiper-wrapper">
						        <div class="swiper-slide">
						      	    <h1 className="sli">Facilitons ensemble vos  Processus  Métier</h1>
						        </div>
						        <div class="swiper-slide">
						      	    <h2 className="sli">Votre site internet est le miroir de votre activité</h2>
						        </div>
						        <div class="swiper-slide">
						      	    <h2 className="sli">Des solutions hybrides pour un développement mobile performant</h2>
						        </div>
						    </div>
				       
				      	</div>
	                    <p>Dans un monde qui change, innovons ensemble pour rendre vos processus métiers plus performants et  accélérer votre croissance. </p>
	                    <div className="home-links">
	                        <a className="main-btn-3 mx-2"  role="button"  onClick={() => scrool('Services')}>Nos solutions
	                            <i className="fas fa-angle-double-right"></i>
	                        </a>
	                        <a className="main-btn-4 mx-2" href="https://calendly.com/contact_capilogi"  target="_blank"  role="button" >Discuter
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
