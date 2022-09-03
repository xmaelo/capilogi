
import React from 'react'


export default function Service(){
	return (
		<section class="services section-padding">
	        <div class="container">
	            <div class="main-heading">
	                <h5 class="pb-2">Services</h5>
	                <h2>The Services we Provide</h2>
	            </div>
	            <div class="serv-field mt-5 row text-center">
	                <div class="serv-box mb-4 col-12 col-md-6 col-lg-3">
	                    <div class="serv-cont serv-cont-2 p-4">
	                        <div class="image  p-3 rounded-circle mx-auto">
	                            <img src="images/services/services1.png" alt="services image"/>
	                        </div>
	                        <h3 class="my-3">Développement mobile</h3>
	                        {/*<p>Nos experts maîtrisent les technologies multiplateformes, voilà pourquoi nous créons ...</p>*/}
	                        <div class="more">
	                            <a class="sec-btn" href="services-details.html">Détails</a>
	                        </div>
	                    </div>
	                </div>
	                <div class="serv-box mb-4 col-12 col-md-6 col-lg-3">
	                    <div class="serv-cont serv-cont-2 p-4">
	                        <div class="image p-3 rounded-circle  mx-auto">
	                            <img src="images/services/services2.png" alt="services image"/>
	                        </div>
	                        <h3 class="my-3">Développement web</h3>
	                        {/*<p>Un site internet est une présentation globale de votre entreprise auprès de votre ...</p>*/}
	                        <div class="more">
	                            <a class="sec-btn" href="services-details.html">Détails</a>
	                        </div>
	                    </div>
	                </div>
	                <div class="serv-box mb-4 col-12 col-md-6 col-lg-3">
	                    <div class="serv-cont serv-cont-2 p-4">
	                        <div class="image p-3 rounded-circle  mx-auto">
	                            <img src="images/services/services3.png" alt="services image"/>
	                        </div>
	                        <h3 class="my-3">Data engineering</h3>
	                        {/*<p>Quelle que soit sa taille, votre organisation produit des données. Ces données sont ...</p>*/}
	                        <div class="more">
	                            <a class="sec-btn" href="services-details.html">Détails</a>
	                        </div>
	                    </div>
	                </div>
	                <div class="serv-box mb-4 col-12 col-md-6 col-lg-3">
	                    <div class="serv-cont serv-cont-2 p-4">
	                        <div class="image p-3 rounded-circle  mx-auto">
	                            <img src="images/services/services4.png" alt="services image"/>
	                        </div>
	                        <h3 class="my-3"> Logiciel métier</h3>
	                        {/*<p>Un logiciel métier est une solution développée pour répondre aux spécificités d’un ...</p>*/}
	                        <div class="more">
	                            <a class="sec-btn" href="services-details.html">Détails</a>
	                        </div>
	                    </div>
	                </div>
	            </div>
	           {/* <div class="more-prog text-center mt-3">
	                <a href="services-1.html" class="main-btn-2">More Services
	                    <i class="fas fa-angle-double-right"></i>
	                </a>
	            </div>*/}
	        </div>
	    </section>
	)
}