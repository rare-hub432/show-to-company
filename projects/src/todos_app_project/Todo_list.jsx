function Todo_list({list,complete,delthis}){
	
	return (

		<tbody>
					{
					  list.map((list,index) =>(
							<tr id={index}>
								<td style={{textDecoration: list.completed ? 'line-through' : 'none',
									color:list.completed ? 'indianred' : ''}}>
									{index} :
								</td>
								<td style={{textDecoration: list.completed ? 'line-through' : 'none',
									color:list.completed ? 'indianred' : ''}}>
									{list.task}
								</td>
								<td >
									<a style={{color:list.completed ? 'green' : 'darkred'}} 
										onClick={() =>complete(index)}>
									 {list.completed ? 'completed' : 'pending'}</a>
								</td>
								<td>
									<a className='red' onClick={() =>delthis(index)}>delete</a>
								</td>
							</tr>
					  ))
					}
		</tbody>

	)
}

export default Todo_list;