
import {Link} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'

import {QuizContext} from '../quiz_context/quizcontext.jsx'

export default function Quiz_result_page(){

	var {item,dispatch} = useContext(QuizContext);

	var [localdata,setLocaldata] = useState([]);

	useEffect(() =>{
		var stored = JSON.parse(localStorage.getItem('leaderboard'));

		setLocaldata(stored);
	},[])

	
	localdata.sort( (a,b) =>b.name.toUpperCase().localeCompare(a.name.toUpperCase()) );
	

	function reseter(){
		dispatch({type:'RESET'})
	}
	return (
		<>
			<div className="card shadow py-2">
				{localdata.length===0 ? (
					<div className="font-weight-bold">No scores yet. lets! play the quiz</div>
				) : (
					<table className="table table-borderd table-striped" border="1">
					<thead className="table-dark">
						<tr>
							<th>index</th>
							<th>User id</th>
							<th>Name</th>
							<th>Score</th>
							<th>Percentage</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{localdata.map((localdata,index) =>(
							<tr key={index}>
								<td>{index}</td>
								<td>{localdata.id}</td>
								<td>{
									localdata.name
									// localdata.name.charAt(0).toUpperCase() + localdata.name.slice(1).toLowerCase()
								}</td>
								<td>{localdata.score}</td>
								<td>{localdata.percentage}%</td>
								<td>{localdata.date}</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td colspan="6">
								<button 
									onClick={() =>{
										if(confirm('Are you sure you want to remove leaderboard data?')){
											localStorage.removeItem('leaderboard');
											setLocaldata([]);
										}
										else{
											return false;
										}										
									}}
									className="btn btn-danger">clear leaderboard</button>
							</td>
						</tr>
					</tfoot>
					</table>
				)}
				<Link to="/" 
					onClick={reseter}
					className="btn btn-sm btn-warning mx-auto w-25">
					Go to Home
				</Link>					
			</div>
		</>
	)
}