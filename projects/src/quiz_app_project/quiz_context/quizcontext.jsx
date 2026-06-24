import {useReducer,createContext} from 'react'
import questions from '../quiz_data/questions.json'
 

export var QuizContext = createContext();

var intialitem = {
	username : "",
	// making key for question no here
	index : 0,
	// making key for score/marks here
	score : 0,
	// key for quiz complete
	completed:false,
	questions
}

function quizreduce(item,action){
	switch(action.type){
		case 'SET_NAME':
			return{
				...item,
				username : action.name
			}
		case 'ANSWER':
			return{
				...item,
				index : item.index + 1,
				score : action.uservalue ? item.score + 1 : item.score,
			}
		case 'FINISH':
			return{
				...item,
				completed : true
			}
		case 'RESET':
			return{
				...intialitem
			}
		default:
			return item;
	}
}

export var QuizProvider = ({children}) =>{

	var [item,dispatch] = useReducer(quizreduce,intialitem)

	return (
		<QuizContext.Provider value={{item,dispatch}}>
			{children}
		</QuizContext.Provider>
	)
}

// export {QuizContext,QuizProvider}