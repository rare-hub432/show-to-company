import '../App.css'

import {useState,useEffect,useRef} from 'react'
function Expenseform({ onAddExpense }){

	var [title,setTitle] = useState('');
	var [amount,setAmount] = useState('');

	var foc = useRef();
	var enter = (e) =>{
				e.preventDefault();
				if(!title || !amount) return alert('please fill all fields')

				// making object
				const newdata = {
					id: Date.now(),
					title,
					amount:parseFloat(amount)
				}


				
				onAddExpense(newdata)
				setTitle('')
				setAmount('')
				foc.current.focus();
				
			}

	return (
		<div className="center">
			<h2>Expense form</h2>
			<form onSubmit={enter}>
				<input type="text" value={title} ref={foc} onChange={(e) =>setTitle(e.target.value)} placeholder="Expense title" /> {" "}
				<input type="number" value={amount} onChange={(e) =>setAmount(e.target.value)} placeholder="Amount" style={{width:'95px'}} /><br/><br/>

				<button type="submit" style={{border:'0.5px solid black'}}>Add Expense</button>
			</form>
		</div>
	)
}
export default Expenseform