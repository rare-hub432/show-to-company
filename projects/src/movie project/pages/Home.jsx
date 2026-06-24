import "../../App.css"

import Movie_card from "../components/movie_card"

import {useState,useEffect,useRef} from 'react'

import {useNavigate,useLocation}  from 'react-router-dom'

export default function Home(){
	var search = useRef();

	// making movies variable empty array
	var [movies,setMovies] = useState([]);
	// for loading show before loading data
	var [loading,setLoading] = useState(false);


	const navigate = useNavigate();
	const location = useLocation();


	

	const fetchmovies = async (searchitem) =>{

		
		setLoading(true)

		const response = await fetch(`http://omdbapi.com/?&apikey=35f7241e&s=${searchitem}`);
		// we are using json file so we write response.json() if it is text file we write response.text()
		const data = await response.json();

		console.log(data);

	
		setMovies(data.Search || [])

		
		setLoading(false)
	}

	useEffect(() =>{
		// Avengers is the default value we send in function and so on
		
		// console.log(search)
		var params = new URLSearchParams(location.search);

		var query = params.get('searchterm');

		if(query){
				search.current.value = query;
				fetchmovies(query);
		}
		else{
			search.current.value = '';

			fetchmovies('Avengers');
		}

	},[location.search])


	


	return (
		<div>

			{/*for movie list box*/}
			<form>
				<input type="text" ref={search}
					 placeholder="enter movie name..." />
				<button type="submit" onClick={(e) =>{
				e.preventDefault();

				
				 navigate(`?searchterm=${search.current.value}`);

				}}>Search</button>
			</form>

			<div>
				
				{loading ? <h2>loading movies...</h2> : <Movie_card propmovies={movies} />}
				
			</div>

		</div>
	)
}