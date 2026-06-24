

import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

export default function Movie_details(){
	var {id} = useParams()
	var [movie,setMovie] = useState(null)

	useEffect(() =>{
		var getmovie = async () =>{
			var res = await fetch(`http://omdbapi.com/?&apikey=35f7241e&i=${id}`)
			var data =	await res.json();

			console.log(data)
			setMovie(data)
		}
		getmovie();
	},[id]);
		
		if(!movie) return <h2>loading movie details...</h2>

	var lightbold = {
		fontWeight : 'bold'
	}
	return (
			<>
			<div className="movie_card" style={{maxWidth:'100%',border:'2px solid black'}}>
					<div className='movie_img' style={{maxWidth:'30%',
					margin:'0 auto 40px'}}>
						<img src={movie.Poster} alt={movie.Title} style={{width:'100%'}} />
					</div>
					<div className="movie_info">
						<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
							<div style={{fontWeight:600}}>Name :&nbsp;</div>
							<h3> {movie.Title}</h3>
						</div>
						<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
							<div style={{fontWeight:600}}>Language :&nbsp;</div>
							<div>{movie.Language}</div>
						</div>
						<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
							<div style={{fontWeight:600}}>Year :&nbsp;</div>
							<div>{movie.Year}</div>
						</div>
						<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
							<div style={{fontWeight:600}}>Released :&nbsp;</div>
							<div>{movie.Released}</div>
						</div>
						<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
							<div style={{fontWeight:600}}>Runtime :&nbsp;</div>
							<div>{movie.Runtime}</div>
						</div>
						<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
							<div style={{fontWeight:600}}>Genre :&nbsp;</div>
							<div>{movie.Genre}</div>
						</div>
					</div><br/>
					<div >
							<div style={{fontWeight:600}}>Plot :&nbsp;</div>
							<div>{movie.Plot}</div>
					</div>
				</div>
			</>	
			
	)
}