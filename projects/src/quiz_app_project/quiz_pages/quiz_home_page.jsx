import {useState,useEffect,useContext} from 'react'

import {QuizContext} from '../quiz_context/quizcontext.jsx'

import {useNavigate} from 'react-router-dom'

export default function Quiz_home_page(){
	var [name,setName] = useState('');

	var {dispatch} = useContext(QuizContext)

	var navigate = useNavigate();

	var startquiz = () =>{
		if(!name.trim()) return alert('please enter name');

		dispatch({
			type : "SET_NAME",
			name : name
		})

		navigate('/Quiz_test_page')
	}

	return (
		<>
			<h3 className="mt-5 font-weight-bold">React quiz challenge</h3>

			<input type="text" className="form-control" placeholder="enter your name" 
				value={name} onChange={(e) =>setName(e.target.value)} />

			<button className="btn btn-primary mt-2" onClick={startquiz} >Start Quiz</button>
		</>
	)
}