import {NavLink} from 'react-router-dom'
import '../../App.css'

import {productcreateContext} from './product_context' 
import {useContext} from 'react'

export default function Shop_navbar(){

	var active = ({isActive }) =>(isActive ? 
  {backgroundColor:'darkgreen',color:'white',padding:'4px 10px',alignContent:'center'} :
  {backgroundColor:'',padding:'4px 10px'});

	var {cart} = useContext(productcreateContext);
	
	return (
		<nav className="d-flex bg-secondary text-white align-items-center px-3">
			<div className="display-4 font-weight-bold apb_red_2">Myshop</div>
			<div style={{alignContent:'center',width:'auto'}} 
				className="d-flex  ml-auto apb_black_2">

				<NavLink to="/" className="text-white"
					style={active}>Home</NavLink>

				<NavLink to="/shop_cart" className="text-white ml-2"
				style={active}>Cart<span>({cart.length})</span></NavLink>	

			</div>
		</nav>
	)
}