
import React from 'react'


export default function Apropos(){
	function scrool(element, min) {
	  const Min = min ? min : 0
      const div = document.getElementById(element);
      window.scrollTo(0, (div.offsetTop - Min));
	 // var topPos = div.offsetTop;
	 // console.log('topPos', topPos)
  //     div.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
	return (
		<div>
			<section className="about section-padding" id="About">
		        <div className="container">
		            <div className="about-field justify-content-between row">
		                <div className="about-content col-12 col-lg-6">
		                    <div className="text">
		                        <h5 className="pb-2">Le métier de capilogi</h5>
		                        <h2>Des experts de la programmation informatique à votre service</h2>
		                    </div>
		                    <p className="pb-2">
		                    	Un accompagnement sur-mesure dans le développement web et mobile.
								Une expertise éprouvé dans le développement de solution métier et le traitement des données.
		                    </p>
		                    <div className="about-prog">
		                        <div className="pb-3 about-bar">
		                            <div className="pb-2 prog-text d-flex justify-content-between">
		                                <h4>Web et Mobile</h4>
		                                <span className="value">85%</span>
		                            </div>
		                            <div className="ab-load">
		                                <span className="liq-load" data-progress="85%"></span>
		                            </div>
		                        </div>
		                        <div className="pb-3 about-bar">
		                            <div className="pb-2 prog-text d-flex justify-content-between">
		                                <h4>Logiciel Métier</h4>
		                                <span className="value">90%</span>
		                            </div>
		                            <div className="ab-load">
		                                <span className="liq-load" data-progress="90%"></span>
		                            </div>
		                        </div>
		                        <div className="pb-5 about-bar">
		                            <div className="pb-2 prog-text d-flex justify-content-between">
		                                <h4>Data Managment</h4>
		                                <span className="value">75%</span>
		                            </div>
		                            <div className="ab-load">
		                                <span className="liq-load" data-progress="75%"></span>
		                            </div>
		                        </div>
		                        <a role="button" onClick={() => scrool('Services')} className="main-btn-1">En savoir plus
		                            <i className="fas fa-angle-double-right"></i>
		                        </a>
		                    </div>
		                </div>
		                <div className="about-image mx-auto mx-lg-0 mt-5 mt-lg-0 col-12 col-lg-6">
		                    <div className="image position-relative ms-0 ms-lg-5 me-0 me-lg-5">
		                        <div className="ab-img-border"></div>
		                        <div className="img-box">
		                            <img className="img-fluid w-100 d-block" src="images/about.jpg" alt="about capilogi"/>
		                        </div>
		                        <div className="years d-flex flex-column">
		                            {/*<span className="number">18+</span>*/}
		                            <em className="mb-0"> Un accompagnement <br/> de proximité</em>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		</div>
	)
}