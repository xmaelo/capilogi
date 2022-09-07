
import React from 'react'


export default function Service(){
	function scrool(element, min) {
	  const Min = min ? min : 0
      const div = document.getElementById(element);
      window.scrollTo(0, (div.offsetTop - Min));
	 // var topPos = div.offsetTop;
	 // console.log('topPos', topPos)
  //     div.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
	return (
		<section className="services section-padding" id="Services">
	        <div className="container">
	            <div className="main-heading">
	                <h5 className="pb-2">Services</h5>
	                <h2>Nos services sur-mesures pour répondre à vos besoins </h2>
	            </div>
	            <div className="serv-field mt-5 row">
	                <div className="serv-box mb-4 col-12 col-md-6 col-lg-4" id="Metier">
	                    <div className="serv-cont serv-cont-2 p-4">
	                        <div className="image p-3 rounded-circle">
	                            <img src="images/services/services1.png" alt="Logiciel image"/>
	                        </div>
	                        <h3 className="my-3">Logiciel Métier</h3>
	                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of</p>
	                        <div className="more">
	                            <a className="sec-btn" href="services-details.html">Read More</a>
	                        </div>
	                    </div>
	                </div>
	                <div className="serv-box mb-4 col-12 col-md-6 col-lg-4" id="Web">
	                    <div className="serv-cont serv-cont-2 p-4">
	                        <div className="image p-3 rounded-circle">
	                            <img src="images/services/services2.png" alt="Developpement image"/>
	                        </div>
	                        <h3 className="my-3">Developpement Web</h3>
	                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of</p>
	                        <div className="more">
	                            <a className="sec-btn" href="services-details.html">Read More</a>
	                        </div>
	                    </div>
	                </div>
	                <div className="serv-box mb-4 col-12 col-md-6 col-lg-4" id="Mobile">
	                    <div className="serv-cont serv-cont-2 p-4">
	                        <div className="image p-3 rounded-circle">
	                            <img src="images/services/coding.png" alt="mobile dev image" />
	                        </div>
	                        <h3 className="my-3">Développement Mobile</h3>
	                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of</p>
	                        <div className="more">
	                            <a className="sec-btn" href="services-details.html">Read More</a>
	                        </div>
	                    </div>
	                </div>
	                <div className="serv-box mb-4 col-12 col-md-6 col-lg-4" id="IA">
	                    <div className="serv-cont serv-cont-2 p-4">
	                        <div className="image p-3 rounded-circle">
	                            <img src="images/services/services4.png" alt="Intelligence  Artificiel< image"/>
	                        </div>
	                        <h3 className="my-3">Intelligence  Artificiel</h3>
	                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of</p>
	                        <div className="more">
	                            <a className="sec-btn" href="services-details.html">Read More</a>
	                        </div>
	                    </div>
	                </div>
	                <div className="serv-box mb-4 col-12 col-md-6 col-lg-4" id="Recrutement">
	                    <div className="serv-cont serv-cont-2 p-4">
	                        <div className="image p-3 rounded-circle">
	                            <img src="images/services/services5.png" alt="Recrutement image"/>
	                        </div>
	                        <h3 className="my-3">Recrutement</h3>
	                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of</p>
	                        <div className="more">
	                            <a className="sec-btn" href="services-details.html">Read More</a>
	                        </div>
	                    </div>
	                </div>
	                <div className="serv-box mb-4 col-12 col-md-6 col-lg-4" id="BI">
	                    <div className="serv-cont serv-cont-2 p-4">
	                        <div className="image p-3 rounded-circle">
	                            <img src="images/services/services6.png" alt="Big Data et BI image"/>
	                        </div>
	                        <h3 className="my-3">Big Data et BI</h3>
	                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of</p>
	                        <div className="more">
	                            <a className="sec-btn" href="services-details.html">Read More</a>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div className="more-prog text-center mt-3">
	                <a role="button"  onClick={() => scrool('Services')}  className="main-btn-2">Nos services
	                    <i className="fas fa-angle-double-right"></i>
	                </a>
	            </div>
	        </div>
	    </section>
	)
}