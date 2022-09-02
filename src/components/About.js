
import React from 'react'


export default function About(){
	return (
		<section className="team bg-color-gray section-padding">
	        <div className="container">
	            <div className="main-heading">
	                <h5 className="pb-2">About us</h5>
	                <h2>Equipe</h2>
	            </div>
	            <div className="team-field row pt-4">
	                <div className="team-box px-3 pt-3 col-12 col-md-6 col-lg-3">
	                    <div className="team-cont shadow-sm">
	                        <div className="image overflow-hidden position-relative">
	                            <img className="img-fluid w-100 rounded" src="images/team/team1.jpg" alt="team image"/>
	                            <div className="team-social py-3">
	                                <a href="#"><i className="fab fa-facebook-f"></i></a>
	                                <a href="#"><i className="fab fa-twitter"></i></a>
	                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
	                            </div>
	                        </div>
	                        <div className="team-info pt-3 px-1">
	                            <h4 className="text-center">Aayden Maegla</h4>
	                            <span className="d-block text-center pb-3">CEO Founder</span>
	                        </div>
	                    </div>
	                </div>
	                <div className="team-box px-3 pt-3 col-12 col-md-6 col-lg-3">
	                    <div className="team-cont shadow-sm">
	                        <div className="image overflow-hidden position-relative">
	                            <img className="img-fluid w-100 rounded" src="images/team/team2.jpg" alt="team image"/>
	                            <div className="team-social py-3">
	                                <a href="#"><i className="fab fa-facebook-f"></i></a>
	                                <a href="#"><i className="fab fa-twitter"></i></a>
	                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
	                            </div>
	                        </div> 
	                        <div className="team-info pt-3 px-1">
	                            <h4 className="text-center">Sabern Wade</h4>
	                            <span className="d-block text-center pb-3">Database Administrator</span>
	                        </div>
	                    </div>
	                </div>
	                <div className="team-box px-3 pt-3 col-12 col-md-6 col-lg-3">
	                    <div className="team-cont shadow-sm">
	                        <div className="image overflow-hidden position-relative">
	                            <img className="img-fluid w-100 rounded" src="images/team/team3.jpg" alt="team image"/>
	                            <div className="team-social py-3">
	                                <a href="#"><i className="fab fa-facebook-f"></i></a>
	                                <a href="#"><i className="fab fa-twitter"></i></a>
	                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
	                            </div>
	                        </div>
	                        <div className="team-info pt-3 px-1">
	                            <h4 className="text-center">Hunter Galt</h4>
	                            <span className="d-block text-center pb-3">IT director</span>
	                        </div>
	                    </div>
	                </div>
	                <div className="team-box px-3 pt-3 col-12 col-md-6 col-lg-3">
	                    <div className="team-cont shadow-sm">
	                        <div className="image overflow-hidden position-relative">
	                            <img className="img-fluid w-100 rounded" src="images/team/team4.jpg" alt="team image"/>
	                            <div className="team-social py-3">
	                                <a href="#"><i className="fab fa-facebook-f"></i></a>
	                                <a href="#"><i className="fab fa-twitter"></i></a>
	                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
	                            </div>
	                        </div>
	                        <div className="team-info pt-3 px-1">
	                            <h4 className="text-center">Ivy Jack</h4>
	                            <span className="d-block text-center pb-3">Project Manager</span>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>
	)
}