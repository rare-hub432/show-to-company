
import {Link} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'

import {QuizContext} from '../quiz_context/quizcontext.jsx'

export default function Quiz_result_page(){

	var {item,dispatch} = useContext(QuizContext);



	var percentage = Math.round( (item.score/item.questions.length) * 100 );



	useEffect(() =>{
			


		var stored = JSON.parse(localStorage.getItem('leaderboard')) || [];


		
		var newid = stored.length + 1;


		const entry = {
			id : newid,
			name : item.username,
			// name : item.username.charAt(0).toUpperCase() + item.username.slice(1).toLowerCase(),
			score : item.score,
			percentage,
			// for current date and time here
			date : new Date().toLocaleString()
		}
		
		var exists = stored.some(e =>e.name===entry.name);



		if(!exists){
			var updated = [...stored,entry];
			localStorage.setItem('leaderboard',JSON.stringify(updated))
		}



	},[])


	function reseter(){
		dispatch({type:'RESET'})
	}

	return (
		<>
			<div className="card shadow py-4">
				<h4 className="font-weight-bold">Quiz completed!</h4>
				<h5><span className="font-weight-bold">{item.username}</span>, your score is : </h5>
				<h4 className="font-weight-bold">{item.score}</h4>
				<div className="">
					<Link to="/Quiz_leaderboard_page" className="btn btn-primary">
						view leaderboard
					</Link>
					<Link to="/" 
						onClick={reseter}
						className="btn btn-warning ml-4">
						Home
					</Link>
				</div>
			</div>
		</>
	)
}