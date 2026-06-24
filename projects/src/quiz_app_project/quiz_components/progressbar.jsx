
export default function Progressbar({index,total}){

	var prog = ((index)/total)*100;

	return (
		<>
			<div className="progress">
				<div className="progress-bar" style={{width:`${prog}%`}}>{Math.round(prog)}%</div>
			</div>
		</>
	)
}