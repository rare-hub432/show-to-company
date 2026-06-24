import '../App.css'

import {useState} from 'react'

import Todo_list from './Todo_list'

function Todos_app_project(){

	var [todo,setTodo] = useState('');
	var [list,setList] = useState([
		{task:'got to mall',completed:false},
		{task:'assignment work',completed:false},
		{task:'prepare project',completed:false},
		{task:'color theme',completed:false}
	]);
	var [message,setMessage] = useState('');


	var complete = (index) =>{
		


		// adding all values using spread operator from old here
		var newlist = [...list];

		
		// getting object keys values here
		// here changing value of newlist completed key to toggle true/false
		newlist[index].completed = !newlist[index].completed;

			setList(newlist);
	}


	var delthis = (index) =>{
		var nlist = [...list];

		// alert(nlist[index].task);
		if(confirm(`are you sure you want to delete task : "${index} : ${nlist[index].task}" `)){

			
			nlist.splice(index,1);

			setList(nlist);
		}
		else{
			return false;
		}

	}


	
	return (
		<div className="center">
			<h1>todos app project here</h1>
			<form onSubmit={(e) =>{
				e.preventDefault();

				
				if(todo){
					setList( [...list,{task:todo,completed:false}] );
					
					setMessage(todo + ' todo task added');
					setTodo('');
				}
				else if(todo==''){
					setMessage('please enter a todo');
				}
				else{
					setMessage('');
				}
			}}>
				<label>Add todo </label>
				<input type="text" value={todo} onChange={(e) =>setTodo(e.target.value)}/>


				<button type="submit">ADD todo</button><br/>
				{message && <span className={todo ? 'size20 bold green' : 'size20 bold red'} > 
				{message} </span>}
			</form>
				<span className='bold size18'>total tasks :</span> 
				<span className='bold green size18'>{list.length}</span>
				<table border='1' className='mx_auto' >
					<thead>
						<tr>
							<th colSpan='4' className='size20'>Your todo list here</th>
						</tr>
					</thead>

					<Todo_list list={list} complete={complete} delthis={delthis} />

					
				</table>
		</div>
	)
}
export default Todos_app_project