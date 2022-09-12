
import React from 'react'
import {  Link } from "react-router-dom";

export default function Home(){



	return (
		<>
			 <div className="field404 projects-shuffle text-center">
		        <div className="container">
		            <img className="img-fluid w-100" src="images/error.png" alt="404 error image"/>
		            <h2 className="mb-4">Oops... Page non trouvée!</h2>
		            <p>La page que vous rechercher  n'hexiste pas!</p>
		            <Link to="/">
		                <i className="fas fa-home"></i>
		               Retourner à l'Accueil
		            </Link>
		        </div>
		    </div>
		</>
	)
}
