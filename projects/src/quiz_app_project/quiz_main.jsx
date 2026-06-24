
import {Routes,Route} from 'react-router-dom'

import {lazy, Suspense} from 'react'

import {QuizProvider} from './quiz_context/quizcontext'

var Quiz_home_page = lazy(() =>import('./quiz_pages/quiz_home_page'))
var Quiz_test_page = lazy(() =>import('./quiz_pages/quiz_test_page'))
var Quiz_result_page = lazy(() =>import('./quiz_pages/quiz_result_page'))
var Quiz_leaderboard_page = lazy(() =>import('./quiz_pages/quiz_leaderboard_page'))

export default function Quiz_main(){
	return (
		<div className="text-center w-50 mx-auto mb-5">
			<QuizProvider>
				<Suspense fallback={<h2>loading page...</h2>}>
					<Routes>
						<Route path="/" element={<Quiz_home_page />} />
						<Route path="/Quiz_test_page" element={<Quiz_test_page />} />
						<Route path="/Quiz_result_page" element={<Quiz_result_page />} />
						<Route path="/Quiz_leaderboard_page" element={<Quiz_leaderboard_page />} />
						
					</Routes>
				</Suspense>
			</QuizProvider>
		</div>
	)
}