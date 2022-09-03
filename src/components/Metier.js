import React from 'react'


export default function Metier(){
	return (
		<section className="moreview bg-color-gray section-padding" id="moreview">
	        <div className="container">
	            <div className="over-field align-items-center row">
	                <div className="image col-12 col-lg-6 pe-2 pe-lg-4 mb-4 mb-lg-0">
	                    <img className="img-fluid w-100" src="images/view.svg" alt="about image"/>
	                </div>
	                <div className="view-content col-lg-6">
	                    <div className="text">
	                        <h2>Métier</h2>
	                    </div> 
	                    <p className="pb-2">
	                    	<strong><i class="fas fa-arrow-right"></i> Génie logiciel: CAPILOGI</strong>  vous conseille et vous accompagne dans la réalisation et le
							déploiement de vos projets informatiques. Nous donnons vie à vos projets, et
							assurons leur pérennité. Nous sommes experts en :
	                    </p>
	                    <div className="merits pt-2">
	                        <span>Développement de logiciel métier</span>
	                        <span>Développement web & mobile</span>
	                        <span>Développement de Bot</span>
	                        <span>Développement d'intelligence artificielle</span>
	                        <span>Développement d'application d'aide à la décision</span>
	                    </div>
	                    <p className="pb-2">
	                    	<strong><i class="fas fa-arrow-right"></i> Recrutement: CAPILOGI</strong>  c’est aussi un cabinet de recrutement. Grâce à notre
								expertise du secteur IT, nous recrutons pour vous les meilleurs profils de
								développeurs web, de développeurs mobile, d’ingénieur data pour vous
								accompagner dans votre croissance.
	                    </p>
	                </div>
	              
	            </div>
	        </div>
	    </section>
	)
}