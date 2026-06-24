import "../App.css"

import Navbar from "./components/navbar"
import Home from './pages/Home'
import Movie_details from './pages/Movie_details'


import {Routes,Route,Link} from 'react-router-dom'


export default function Moviebox_main(){

	

	return (
		<div className="center">

			<h1>movie project here</h1>

			<Navbar />

		
		<Routes>			
			<Route path="/" element={<Home />} />
			<Route path="/movie_details/:id" element={<Movie_details />} />	
		</Routes>

		</div>
	)
}