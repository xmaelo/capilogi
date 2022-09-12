
import React from 'react'


export default function Contact(){
	return(
		<section className="contact mt-3" id="Contact">
	        <div className="container">
	            <div className="main-heading">
	                <h5 className="pb-2">Contact</h5>
	                <h2>Contactez-nous</h2>
	            </div>
	           
	            <div className="contact-field">
	                <div className="map">
	                    
	                    <div class="mapouter">
	                    	<div class="gmap_canvas">
	                    		<iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
	                    			src="https://maps.google.com/maps?width=600&amp;height=527&amp;hl=en&amp;q=Paris, 75008&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
	                    		<a href="https://mcpenation.com/">Minecraft Website</a>
	                    	</div>
	                    </div>
	                </div>
	                <div className="contact-form-box">
	                    <h3>Parlons de vos projets</h3>
	                    <form className="form-contact" action="http://localhost:8080/php/contact.php" method="POST">
	                        <div className="flex-form d-flex justify-content-between flex-wrap">
	                            <div className="name">
	                                <input className="w-100" type="text" name="name" required placeholder="Nom"/>
	                            </div>
	                            <div className="email">
	                                <input className="w-100" type="email" name="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required placeholder="E-mail"/>
	                            </div>
	                            <div className="name">
	                                <input className="w-100" type="text" name="subject" required placeholder="Objet"/>
	                            </div>
	                            <div className="message">
	                                <textarea className="w-100" name="message" required placeholder="Votre message"></textarea>
	                            </div>
	                        </div>
	                        <button className="main-btn-1" type="submit">
	                            Envoyer
	                            <i className="far fa-paper-plane"></i>
	                        </button>
	                        <p className="respond-message"></p>
	                    </form>
	                </div>
	            </div>
	        </div>
	    </section>

	)
}