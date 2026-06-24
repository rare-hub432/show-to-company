import Shop_navbar from './components/shop_navbar.jsx'
import Shop_home from './pages/shop_home.jsx'
import Shop_cart from './pages/shop_cart.jsx'


import {Routes,Route} from 'react-router-dom'
import {Product_context} from './components/Product_context'

export default function Sh_index(){

	
  
	return (
		<Product_context>
			<div className="">
				<Shop_navbar />
			    <div className="text-center px-3">
			    	<Routes>
			    		<Route path="/" element={<Shop_home />} />
			        <Route path="/shop_cart" element={<Shop_cart />} />
			      </Routes>
			    </div>
			</div>
		</Product_context>
	)
}