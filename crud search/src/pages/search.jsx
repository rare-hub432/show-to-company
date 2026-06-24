
import { useState ,useEffect} from 'react'

export default function search({srchterm,setSrchterm,setSubmittedsrch}){

	
	function srchsubmit(){
    	setSubmittedsrch(srchterm);
 	}

	return (
		<div style={{textAlign:'center'}}>
			<input type="search" value={srchterm} onChange={ (e) =>setSrchterm(e.target.value) } 
				placeholder="search here..."/>

			
			<input type="submit" onClick={srchsubmit} value="search" />
		</div>
	)	
}