
import {useState,useEffect} from 'react'

import {useNavigate,useParams} from 'react-router-dom'

export default function AddEdituser({baseurl}){

	var [fields,setFields] = useState({
		name : "",
		username : "",
		email : "",
		age : ""
	})

	var [loading,setLoading] = useState(false);

	var navigate = useNavigate();


	function handlechange(e){

		var {name,value} = e.target;

		setFields({...fields,[name] : value});
	}


	var {id} = useParams();


	var adduser = async () =>{

		  var response = await fetch(baseurl, {
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(fields)
			});

			var data = await response.json();
			// console.log(data);

			if (response.ok) {
			  navigate('/',{ state:{message: 'new data added'} });
			}
			
	}

	var edituser = async () =>{

		  var response  = await fetch(baseurl+`${id}`,{

		            method : 'PUT',
		            headers: {
					    'Content-Type': 'application/json'
					 },
			  		body: JSON.stringify(fields)
			});

			var data = await response.json();
			// console.log(data);


			if (response.ok) {
				// 2nd para for message to home file
			  navigate('/',{ state:{message: id + ' : id updated successfully'} });
			}
	}

	function handlesubmit(e){
		e.preventDefault();

		// console.log(fields);
		
		{id ? edituser() : adduser()}
		
	}


	

	var fetchone = async (id) =>{
	  var res = await fetch(baseurl+`${id}`);

	  var data = await res.json();

	  // console.log(data);

	  if(data){

	  	setLoading(true)

	  	setFields(data);

	  	setLoading(false);
	  }

	}

	useEffect(() =>{
		if(id){
	    	fetchone(id);
		}
	},[id]);

	return (
		<>
		{loading ? <h2>loading data wait...</h2> : 
		<div>
		<h3 style={{ textAlign:'center',margin:'25px auto'}}>{id ? `Edit user for id : ${id}` : 'Add user'}</h3>
		<form onSubmit={handlesubmit} style={{margin:'15px auto', width:'70%'}}>
			<label>name:</label>
			<input type="text" name="name" value={fields.name} onChange={handlechange} placeholder="enter name here" /><br /><br />

			<label>username:</label>
			<input type="text" name="username" value={fields.username} onChange={handlechange} placeholder="enter username here" /><br /><br />

			<label>email:</label>
			<input type="email" name="email" value={fields.email} onChange={handlechange} placeholder="enter email here" /><br /><br />

			<label>age:</label>
			<input type="number" name="age" value={fields.age} onChange={handlechange} placeholder="enter age here" /><br /><br />

			<button type="submit">submit</button>
		</form>
		</div>
		}
		</>
	)
}