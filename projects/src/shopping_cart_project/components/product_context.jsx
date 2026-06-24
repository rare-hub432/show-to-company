import {createContext, useContext, useState} from 'react'

var productcreateContext = createContext();

function Product_context({children}){
	var [cart,setCart] = useState([]);

	const addtocart = (product) =>{

		setCart((prev) =>{
			var existing = prev.find((item) =>item.id === product.id)

			if(existing){
				return prev.map((item) =>item.id === product.id ? {...item, qty: item.qty+1} : item);
				
			}
			else{
				return [...prev,{...product,qty:1}];
			}

		})
		
	}

	return (
		<productcreateContext.Provider value={{cart,setCart,addtocart}}>
			{children}
		</productcreateContext.Provider>
	)
}

export {productcreateContext,Product_context}
