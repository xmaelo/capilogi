import React from 'react'


export default function Footer(){
	function scrool(element, min) {
	  const Min = min ? min : 0
      const div = document.getElementById(element);
      window.scrollTo(0, (div.offsetTop - Min));
	 // var topPos = div.offsetTop;
	 // console.log('topPos', topPos)
  //     div.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }
	return(
		<footer className="pt-5">
	        <div className="container pb-5">
	            <div className="footer-field row">
	                <div className="foot-about pb-2 pb-lg-0 mb-3 mb-lg-0 col-12 col-md-6 col-lg-4">
	                    <h4>
	                        <i className="fas fa-angle-double-right"></i>
	                       Nos réseaux sociaux
	                    </h4>
	                    <p className="pb-4">Rejoignez nous sur nos réseaux sociaux</p>
	                    <div className="foot-social">
	                        <ul className="d-flex ps-0">
	                            {/*<li className="px-2"><a href="#"><i className="fab fa-facebook-f"></i></a></li>*/}
	                            <li className="px-2"><a href="https://twitter.com/capilogi" target="_blank"><i className="fab fa-twitter"></i></a></li>
	                            <li className="px-2"><a href="https://www.linkedin.com/company/capilogi/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
	                            {/*<li className="px-2"><a href="#"><i className="fab fa-youtube"></i></a></li>*/}
	                        </ul>
	                    </div>
	                </div>
	                <div className="foot-contact pb-2 pb-lg-0 mb-3 mb-lg-0 col-12 col-md-6 col-lg-4">
	                    <h4>
	                        <i className="fas fa-angle-double-right"></i>
	                        Contact
	                    </h4>
	                    <div className="footCont-link d-flex">
	                        <i className="fas fa-map-marker-alt"></i>
	                        <address className="mb-0">Agence de Paris et Rennes</address>
	                    </div>
	                    <div className="footCont-link d-flex">
	                        <i className="far fa-paper-plane"></i>
	                        <a href="mailTo:contact@capilogi.fr">contact@capilogi.fr</a>
	                    </div>
	                    <div className="footCont-link d-flex">
	                        <i className="fas fa-phone"></i>
	                        <a href="tel:00330968800561">+33 0968800561</a>
	                    </div>
	                    <div className="subscribtion mt-3">
	                        <form action="#">
	                            <div className="sub-box">
	                                <input type="email" placeholder="Email" required/>
	                                <button type="submit" className="main-btn-1">
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
	                        Les services
	                    </h4>
	                    <ul>
	                        <li><a className="nav-item" role="button" onClick={() => scrool('Mobile', 95)}>Développement mobile</a></li>
                            <li><a className="nav-item" role="button" onClick={() => scrool('Web', 95)}>Développement web</a></li>
                            <li><a className="nav-item" role="button" onClick={() => scrool('BI', 95)}>Big data et BI</a></li>
                            <li><a className="nav-item" role="button" onClick={() => scrool('IA', 95)}>Intelligence artificielle</a></li>
                            <li><a className="nav-item" role="button" onClick={() => scrool('Metier', 95)}>Logiciel métier </a></li>
                            <li><a className="nav-item" role="button" onClick={() => scrool('Recrutement', 95)}>Recrutement</a></li>
	                    </ul>
	                </div>
	                <div className="foot-Links pb-2 pb-lg-0 mb-3 mb-lg-0 col-12 col-md-6 col-lg-2">
	                    <h4>
	                        <i className="fas fa-angle-double-right"></i>
	                        CAPILOGI
	                    </h4>
	                    <ul>
	                        <li><a role="button" onClick={() => scrool('Services')}>Services</a></li>
	                        <li><a role="button" onClick={() => scrool('projects')}>Projects</a></li>
	                        <li><a role="button" onClick={() => scrool('About')}>A Propos</a></li>
	                        <li><a role="button" onClick={() => scrool('Contact')}>Contact</a></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	        <div className="container">
	            <div className="copy-right d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
	                <p className="mb-3 mb-md-0 text-center">&copy; 2022 tout droit reservé, <b>CAPILOGI</b></p>
	                <div className="copyRight-links position-relative">
	                    <a className="mx-2" href="#">Conditions générales</a>
	                    <span></span>
	                    <a className="mx-2" href="#"> politique de confidentialité</a>
	                </div>
	            </div>
	        </div>
	    </footer>
	)
}