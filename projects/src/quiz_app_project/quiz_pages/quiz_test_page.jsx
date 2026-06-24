
import Timer from '../quiz_components/timer'
import Progressbar from '../quiz_components/progressbar'
import Questioncard from '../quiz_components/questioncard'

import {useEffect,useContext} from 'react'
import {QuizContext} from '../quiz_context/quizcontext.jsx'
import {useNavigate} from 'react-router-dom'

import usetimer from '../quiz_hooks/useTimer.js' 

export default function Quiz_test_page(){

	var {item,dispatch} = useContext(QuizContext)

	// making variable for question no here
	var {index,questions} = item;

	var navigate = useNavigate();
	
	var {time,reset} = usetimer(1000)

	if(!questions || questions.length===0){
		return <h4 className="text-center">loading questions...</h4>
	}

	if(index >= questions.length){
		dispatch({type:'FINISH'})
		navigate('/Quiz_result_page')
		return null;
	}


	var current = questions[index]

	// when on click
	var handleselect = (option) =>{
		if(time<0){
			dispatch({type:'ANSWER',uservalue : false})
		}else{
			dispatch({type:'ANSWER',uservalue : option===current.answer})
		}
		reset();
	}

	// when not selected any option
	useEffect(() =>{
		if(time<0){
			dispatch({type:'ANSWER',uservalue : false});
			reset();
		}
	},[time])

	return (
		<>
			<Timer time={time} />
			<div>Hello <span>{item.username}</span> Your score : {item.score}</div>
			<Progressbar index={index} total={questions.length} />
			<Questioncard question={current.question} options={current.options} 
				onselect={handleselect} />
		</>
	)
}