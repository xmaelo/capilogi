import React from 'react'


export default function Feedback(){
	return (
		<section className="review bg-color-gray section-padding">
	        <div className="container">
	            <div className="main-heading">
	                <h5 className="pb-2">Avis</h5>
	                <h2>Nos clients sont satisfaits</h2>
	            </div>
	            <div className="review-slider">
	                <div className="swiper-wrapper">
	                    <div className="swiper-slide">
	                        <div className="image pt-2 mb-4 text-center position-relative">
	                            <img className="rounded-circle" src="images/clients/client1.jpg" alt="review image"/>
	                            <span></span>
	                        </div>
	                        <div className="client-info">
	                            <q className="mb-3 text-center">
	                            	La collaboration avec capilogi s'est très bien passée, j'ai été satisfait par la qualité de travail et le professionnalisme des développeurs
	                            </q>
	                            <h4 className="text-center">Romain Guerrin</h4>
	                            <span className="d-block text-center">Entrepreneur</span>
	                        </div>
	                    </div>
	                    <div className="swiper-slide">
	                        <div className="image pt-2 mb-4 text-center position-relative">
	                            <img className="rounded-circle" src="images/clients/client2.jpg" alt="review image"/>
	                            <span></span>
	                        </div>
	                        <div className="client-info">
	                            <q className="mb-3 text-center">
	                            	Mon site a été créé assez rapidement dans un respect des délais. Une équipe au top.
	                            </q>
	                            <h4 className="text-center">Jessica Claulin</h4>
	                            <span className="d-block text-center">orthopnoniste</span>
	                        </div>
	                    </div>
	                    <div className="swiper-slide">
	                        <div className="image pt-2 mb-4 text-center position-relative">
	                            <img className="rounded-circle" src="images/clients/client3.jpg" alt="review image"/>
	                            <span></span>
	                        </div>
	                        <div className="client-info">
	                            <q className="mb-3 text-center">L'équipe a fait du bon travail, et je suis satisfait.</q>
	                            <h4 className="text-center">Jean Benoist</h4>
	                            <span className="d-block text-center">Entrepreneur</span>
	                        </div>
	                    </div>
	                    <div className="swiper-slide">
	                        <div className="image pt-2 mb-4 text-center position-relative">
	                            <img className="rounded-circle" src="images/clients/client4.jpg" alt="review image"/>
	                            <span></span>
	                        </div>
	                        <div className="client-info">
	                            <q className="mb-3 text-center">Un travail de qualité, nous avons aujourd'hui de super rapports pour suivre notre activité.</q>
	                            <h4 className="text-center">Marie Grolier</h4>
	                            <span className="d-block text-center">CEO</span>
	                        </div>
	                    </div>
	                </div>
	                <div className="swiper-pagination"></div>
	              </div>
	        </div>
	    </section>
	)
}