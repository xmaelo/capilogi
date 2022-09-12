
import React, {useEffect} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Service from '../components/Service'
import TrustUs from '../components/TrustUs'
import Projets from '../components/Projets'
import Metier from '../components/Metier'
import Contact from '../components/Contact'
import Apropos from '../components/Apropos'
import Team from '../components/Team'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import Stat from '../components/Stat'
import Together from '../components/Together'
import Partner from '../components/Partner'
import KeepInTouch from '../components/KeepInTouch'


export default function Home(){

	useEffect(() =>{
		window.$(".preloader").delay(750).fadeOut(500);
	}, [])

	return (
		<>
			<Header />
			<Hero />
			<Apropos />
			<TrustUs />
			<Service />
			<Projets />
			<Stat />
			<Team />
			<Feedback />
			<Together />
			<Contact />
			<KeepInTouch />
			{<Partner />}
			<Footer />
			<div className="cookie-consent d-none">
	          <span>Ce site utilise des cookies pour améliorer l'expérience utilisateur. <a href="#" className="ml-1 text-decoration-none">Politique de confidentialité</a> </span>
	          <div className="mt-2 d-flex align-items-center justify-content-center gap-2">
	            <button className="allow-button mr-1 accept-cookies">Accepter</button>
	            <button className="allow-button close-cookies">Refuser</button>
	          </div>
	        </div>
		</>
	)
}
