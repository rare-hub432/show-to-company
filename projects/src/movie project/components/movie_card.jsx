
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function Movie_card({propmovies}){
	var [nmovies,setNmovies] = useState([]);


	

	async function full(){

		

		const datailedmovie =  await Promise.all(
	
			propmovies.map(async (propmovies) =>{

				var res = await fetch(`http://omdbapi.com/?&apikey=35f7241e&i=${propmovies.imdbID}`)
				var data =	await res.json();

				
				return {...propmovies,Genre : data.Genre};
				
			})			
		);

		console.log(datailedmovie);

		setNmovies(datailedmovie);
	}

	useEffect(() =>{
		full();
	},[])

			// console.log(nmovies)
		if(!nmovies) return <h2>loading moviecard...</h2>

	return (
		<div style={{
		display:'flex',

		border:'2px solid red',
		boxSizing:'border-box',
		flexWrap:'wrap',
		width:'100%'
	}}>
			{nmovies.map((movie,index) =>(
				<div className="movie_card" style={{minWidth:'320px',border:'2px solid black',
					margin:'0 auto 40px'}}>{index+1}
					<div className='movie_img' style={{width:'100%'}}>
						<img src={movie.Poster} alt={movie.Title} style={{width:'100%'}} />
					</div>
					<div className="movie_info">
						<h3>{movie.Title}</h3>
						<p>{movie.Year}</p>
					</div>
					<div className="movie_info">
						<p>{movie.Genre}</p>
					</div>
					{/*{addon[index].Genre}*/}
					<Link to={`/movie_details/${movie.imdbID}`} >movie details</Link>
					
							
				</div>
			))}
			
		</div>
	)
}