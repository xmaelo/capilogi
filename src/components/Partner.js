import React from 'react'


export default function Partner(){
	return (
		<div className="partners bg-color-gray py-3">
	        <div className="container">
	        <div className="main-heading">
	                {/*<h5 className="pb-2">Contact</h5>*/}
	                <h2>Nos partenaires</h2>
	            </div>
	            <div className="partner-slider">
	                <div className="swiper-wrapper">
	                    <div className="swiper-slide p-3">
	                        <a className="d-block w-100" role="button">
	                            <img className="img-fluid w-100" src="images/partners/poste.png" alt="partners"/>
	                        </a>
	                    </div>
	                    {/*<div className="swiper-slide p-3">
	                        <a className="d-block w-100" role="button">
	                            <img className="img-fluid w-100" src="images/partners/domiciliation.png" alt="domiciliation"/>
	                        </a>
	                    </div>*/}
	                    <div className="swiper-slide p-3">
	                        <a className="d-block w-100" role="button">
	                            <img className="img-fluid w-100" src="images/partners/legalPlace.png" alt="legalPlace"/>
	                        </a>
	                    </div>
	                    <div className="swiper-slide p-3">
	                        <a className="d-block w-100" role="button">
	                            <img className="img-fluid w-100" src="images/partners/crediM.png" alt="crediM"/>
	                        </a>
	                    </div> 
	                    <div className="swiper-slide p-3">
	                        <a className="d-block w-100" role="button">
	                            <img className="img-fluid w-100" src="images/partners/agence_web.png" alt="agence_web"/>
	                        </a>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	)
}