
export default function Progressbar({question,options,onselect}){
	return (
		<>
			<div className="card shadow p-4">
				<h4>{question}</h4>
				<div className="mt-3">
					{options.map((option,ind) =>(
						<button className="btn btn-outline-primary w-100 mt-2"
							key={ind}
							onClick={() =>onselect(option)}>{option}</button>
					))}
				</div>
			</div>
		</>
	)
}