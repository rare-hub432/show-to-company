
import {useContext} from 'react'
import {productcreateContext} from '../components/product_context'

export default function Shop_cart(){

	var {cart,setCart} = useContext(productcreateContext);

	var invalue = (id,qty) =>{

		setCart((prev) =>
			prev.map((p) =>(p.id===id ? {...p,qty} : p))
		)
		// console.log(cart);
	}

	var handleBlur = (id,qty) =>{
		if(qty==''){
			qty=1
			setCart((prev) =>
				prev.map((p) =>(p.id===id ? {...p,qty} : p))
			)
		}
	}

	

	var total = cart.reduce((sum,item) =>sum + item.price * item.qty,0);

	// console.log(cart);
	return (
		<div style={{width:'100%'}}>
		<h2 className="text-left pl-5 mt-4">Shopping Cart</h2>
		<h5 className="text-left my-4 ml-5">Your Cart</h5>

			{cart.length===0 ? (
				<div className="alert alert-info">No items in cart</div>

			) : (
			<>
				<table className="mx-auto" border="1" cellPadding="20px">
					<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Qty</th>
						<th>Subtotal</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
				{cart.map((cart) =>(
					<tr key={cart.id}>
						<td>{cart.name}</td>
						<td>${cart.price}</td>
						<td>
							<input type="number" min="1" 
								value={cart.qty} className="form-control"
								onChange={(e) =>invalue(cart.id, e.target.value)}
								onBlur={(e) =>handleBlur(cart.id, e.target.value)} />
						</td>
						<td>${cart.qty * cart.price}</td>
						<td><button className="btn btn-danger"
						onClick={(e) =>{
							
							if(confirm(`Are you sure you want to delete product ? : ${cart.name}`)){
								setCart((prev) =>prev.filter((item) =>item.id!==cart.id))

								
							}
							else{
								return false;
							}
						}}>
							remove</button></td>
					</tr>
				))}
				</tbody>
				</table>

				<div className="font-weight-bold text-right">Total: ${total}</div>
			</>
			)}	
		</div>
	)
}