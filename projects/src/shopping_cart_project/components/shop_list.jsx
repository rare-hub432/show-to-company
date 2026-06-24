import {useEffect,useRef} from 'react'
import Shop_product from '../components/shop_product'


export default function Shop_list(){
	var parentRef = useRef();

	useEffect(() =>{
		var mn = parentRef.current.querySelectorAll('.col');

		mn.forEach((mn) =>mn.classList.add('mb-4'));
	
	},[])

	return (
		<>
			<div className="shoplist container-fluid px-0" ref={parentRef}>
				<div className="row row-cols-3 no-gutters mx-0 w-100 card-deck">
					<Shop_product />
				</div>
			</div>	
		</>
	)
}