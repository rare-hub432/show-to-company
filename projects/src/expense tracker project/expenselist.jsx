import '../App.css'


function Expenselist({expenses,delexpense}){

		var zero = "expenses are 0"

		var sum = 0;

		return (
			<div className="center">
				{expenses.map((expense,index) =>{
							{sum = sum + expense.amount}
				})}

				<div className="bold">Total Expenses Amount : {sum}</div>
				<div className="bold">{expenses.length} Tasks Total</div>

				{
					expenses.length==0 ? zero :


						<table className='expenseitem' align='center' border='1' cellPadding='10px' 
							cellSpacing="0">
							<thead>
							<tr>
								<th>Index</th>
								<th>id</th>
								<th>title</th>
								<th>amount</th>
								<th>action</th>

							</tr>
							</thead>
							<tbody>
						 {expenses.map((expense,index) =>(
						 	// {var sum = 0}
							<tr id={expense.id}>
								<td>{index+1}</td>
								<td style={{fontWeight:500, textTransform:'capitalize'}}>{expense.id}</td>
								<td style={{fontWeight:700}}>{expense.title}</td>
								<td style={{fontWeight:700}}>{expense.amount}</td>
								<td><button className='red' 
								onClick={() =>delexpense(expense.id,expense.title)}>delete</button></td>
							</tr>
						 ))}
						 <tr>
						 	<th colSpan="6">Total Expenses Amount : {sum}</th>
						 </tr>
						</tbody>
						</table>
										
				}
			</div>
		)
}
export default Expenselist