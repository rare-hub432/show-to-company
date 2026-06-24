import {Link} from 'react-router-dom'

import {useContext} from 'react'
import {productcreateContext} from './product_context'

export default function Shop_product(){
	var products = [
		{id:1211,name:"laptop",price:54000},
		{id:1212,name:"watch",price:5000},
		{id:1213,name:"shoes",price:10000},
		{id:1214,name:"shirts",price:15000},
		{id:1215,name:"pants",price:20000},
		{id:1216,name:"salwar",price:2000},
		{id:1217,name:"kurti",price:4000}		
	];

	var {addtocart} = useContext(productcreateContext);

	return (
		<>
			{products.map((product) =>(		
				<div className="col">
					<div className="card" key={product.id}>
						<h5 className="card-header text-capitalize">{product.name}</h5>
						<div className="card-body">
							<p>{product.price}</p>
						</div>
						<div className="card-footer">
							<Link 
								onClick={() =>addtocart(product)}
							className="btn btn-primary">Add to cart</Link>
						</div>
					</div>
				</div>	
			))};
		</>
	)
}