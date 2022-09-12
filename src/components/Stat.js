import React from 'react'


export default function Stat(){
	return (
		    <section className="counter-1 main-gradiant pt-5 pb-5" id="counter">
		        <div className="container">
		            <div className="d-flex justify-content-between flex-wrap counter-area">
		                <div className="position-relative text-center">
		                    <div className="icon">
		                        <i className="far fa-thumbs-up"></i>
		                    </div>
		                    <span className="odometer" data-count="+100">+100</span>
		                    <h4>Projects</h4>
		                </div>       
		                <div className="position-relative text-center">
		                    <div className="icon">
		                        <i className="far fa-user"></i>
		                    </div>
		                    <span className="odometer" data-count="11">11</span>
		                    <h4>Employées</h4>
		                </div>
		                <div className="position-relative text-center">
		                    <div className="icon">
		                        <i className="far fa-smile"></i>
		                    </div>
		                    <span className="odometer" data-count="100%">+100</span>
		                    <h4>De client satisfait</h4>
		                </div>
		                <div className="position-relative text-center">
		                    <div className="icon">
		                        <i className="fas fa-award"></i>
		                    </div>
		                    <span className="odometer" data-count="78%">78%</span>
		                    <h4>De 5 étoiles</h4>
		                </div>
		            </div>
		        </div>
		    </section>
	)
}