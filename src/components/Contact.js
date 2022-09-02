
import React from 'react'


export default function Contact(){
	return(
		<section class="contact section-padding">
	        <div class="container">
	            <div class="main-heading">
	                <h5 class="pb-2">Contact</h5>
	                <h2>Keep in touch with</h2>
	            </div>
	           
	            <div class="contact-field">
	                <div class="map">
	                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435330.2461244175!2d-119.22978090041478!3d35.016509229685205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c229d213a60943%3A0x3458deb43bf50b32!2sCalifornia%20City%2C%20CA%2C%20USA!5e0!3m2!1sen!2seg!4v1630528358426!5m2!1sen!2seg" style={{"border":0}} loading="lazy"></iframe>
	                </div>
	                <div class="contact-form-box">
	                    <h3>Send Us Messages</h3>
	                    <form class="form-contact" action="php/contact.php" method="POST">
	                        <div class="flex-form d-flex justify-content-between flex-wrap">
	                            <div class="name">
	                                <input class="w-100" type="text" name="name" required placeholder="Name"/>
	                            </div>
	                            <div class="email">
	                                <input class="w-100" type="email" name="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required placeholder="Email"/>
	                            </div>
	                            <div class="name">
	                                <input class="w-100" type="text" name="subject" required placeholder="Subject"/>
	                            </div>
	                            <div class="message">
	                                <textarea class="w-100" name="message" required placeholder="Message"></textarea>
	                            </div>
	                        </div>
	                        <button class="main-btn-2" type="submit">
	                            Send Message
	                            <i class="far fa-paper-plane"></i>
	                        </button>
	                        <p class="respond-message"></p>
	                    </form>
	                </div>
	            </div>
	        </div>
	    </section>

	)
}