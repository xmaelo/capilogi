import React from 'react'


export default function KeepInTouch(){
	function scrool(element, min) {
	  const Min = min ? min : 0
      const div = document.getElementById(element);
      window.scrollTo(0, (div.offsetTop - Min));
	 // var topPos = div.offsetTop;
	 // console.log('topPos', topPos)
  //     div.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
	return (
	    <section className="contact section-padding">
	        <div className="container">
	            <div className="main-heading">
	                {/*<h5 className="pb-2">Contact</h5>*/}
	                <h2>Nous sommes disponibles</h2>
	            </div>
	            <div className="cont-info pt-5 row">
	                <div className="col-12 col-md-6 col-lg-4 px-3 mb-4">
	                    <div className="cont-box">
	                        <h4>Bureau</h4>
	                        <address>Rue saint Georges Acigné, à 20 min de Rennes,</address>
	                        <address className="mb-0">59, Rue de Ponthieu, 75008 Paris</address>
	                        <i className="fas fa-map-marker-alt"></i>
	                    </div>
	                </div>
	                <div className="col-12 col-md-6 col-lg-4 px-3 mb-4">
	                    <div className="cont-box">
	                        <h4>E-mail</h4>
	                        <p>Contactez-nous par mail nous reviendrons rapidement vers vous.</p>
	                        <a href="mailTo:contact@capilogi.fr">contact@capilogi.fr</a>
	                        <i className="fas fa-paper-plane"></i>
	                    </div>
	                </div>
	                <div className="col-12 col-md-6 col-lg-4 px-3 mb-4 mx-auto">
	                    <div className="cont-box">
	                        <h4>Téléphone</h4>
	                        <p>Notre équipe est également disponible au téléphone pour vous renseigner</p>
	                        <a href="tel:#">+33 0954163180</a>
	                        <i className="fas fa-phone"></i>
	                    </div>
	                </div>
	            </div>
	            <div className="contact-send-field mt-4 p-2 text-center">
	                <a role="button"  onClick={() => scrool('Contact')} className="main-btn-1">
	                    Envoyer un message
	                    <i className="fas fa-angle-double-right"></i>
	                </a>
	            </div>
	        </div>
	    </section>
	)
}