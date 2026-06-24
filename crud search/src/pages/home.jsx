

import {useState,useEffect} from 'react'

import {useLocation,useNavigate,Link} from 'react-router-dom'

import Search from './search'

export default function Adduser({api,setApi,baseurl2,delthis}){


	var navigate = useNavigate();

	var [loading,setLoading] = useState(false);

	var [editid,setEditid] = useState(null);



	var location = useLocation();

		var [flashmessage,setFlashmessage] = useState('');



	useEffect(() =>{
		// for any type of message using navigate
		// 	for add and update message used here
		if(location.state?.message){
			setFlashmessage(location.state.message)
		}


		// this line for removing/clear router state so message doesnt show on refresh
		window.history.replaceState({},document.title);


		var timer = setTimeout(() =>{
			setFlashmessage('');
		},5000);

		return () =>clearTimeout(timer);

	},[location]);



	var [srchterm,setSrchterm] = useState('');

	var [submittedsrch,setSubmittedsrch] = useState('');


var fetchdata = async () =>{
  var res = await fetch(baseurl2);

  var data = await res.json();

  // console.log(data);

  setApi(data);
}

useEffect(() =>{

    fetchdata();


    var scrollposition = localStorage.getItem('scrollposition');

    if(scrollposition){

	  	setLoading(true)

    	window.scrollTo( 0,Number(scrollposition) );

	  	setLoading(false);
    }


    var prevsearch = localStorage.getItem('prevsearch');

    if(prevsearch){

	  	setLoading(true)

    	setSrchterm(prevsearch);

    	// setSubmittedsrch(prevsearch);

	  	setLoading(false);
    }

},[]);




// for searches mainly filter automatic if not onclick search 
var filteredData = api.filter((item) =>{

	// for without button click remove all Submittedsrch and use srchterm state only in childs and not 
  // Submittedsrch state here also
	// var srch = submittedsrch.toLowerCase()

				// OR
	var srch = srchterm.toLowerCase()

	// includes here check if it inlcudes our given Search if empty serch it shows all
	return item.name.toLowerCase().includes(srch) ||
			item.username.toLowerCase().includes(srch) || 
			item.email.toLowerCase().includes(srch);
})



// sorting here
// filteredData.sort((a,b) =>a.name.toLowerCase().localeCompare(b.name.toUpperCase()));

// filteredData.sort((a,b) =>a.email.toLowerCase().localeCompare(b.email.toUpperCase()));

// filteredData.sort((a,b) =>a.age - b.age);
filteredData.sort((a,b) =>b.age - a.age);



	return (
		<>
		{flashmessage && <div>{flashmessage}</div>}

		{loading ? <h2>loading data and scrolling position wait...</h2> : 
			<div style={{ margin:'20px auto', border:'2px solid red', width:'80%'}} >
      <Search srchterm={srchterm} setSrchterm={setSrchterm} setSubmittedsrch={setSubmittedsrch} />

		      {filteredData.length === 0 ? <h2 style={{textAlign:'center'}}>No data to show</h2> :
		      <div>  
			<h2 style={{margin:'12px auto',width:'28%'}}>
				{srchterm ? 'Searched Records' : 'total Records'}  : {filteredData.length}
			</h2>
		      <button style={{marginLeft:'40%'}}>
		      	<Link to="/add user" onClick={() =>{

		                	localStorage.setItem('scrollposition',window.scrollY);

		         }}> Add data</Link>
		      </button><br/><br/>
		        <table border="1" width='100%' >
		            <thead>
		              <tr>
		                <th>id</th>
		                <th>name</th>
		                <th>username</th>
		                <th>email</th>
		                <th>age</th>
		                <th>Action</th>
		              </tr>
		            </thead>
		            <tbody>
		          {filteredData.map((data,index) =>(
		              <tr key={data.id}>
		                <td>{data.id}</td>
		                <td>
		                	{ 
		                		

		                						data.name
		                	}
		                </td>
		                <td>{data.username}</td>
		                <td>{data.email}</td>
		                <td>{data.age}</td>
		                <td>

		                <Link to={`/edit user/${data.id}`} onClick={() =>{

		                	localStorage.setItem('scrollposition',window.scrollY);

		                	localStorage.setItem('prevsearch',srchterm);


		                }} >Edit</Link>

		                  {/*<button onClick={(e) =>{
		                  	e.preventDefault();

		                  	setEditid(data.id);

		                  }}>Editinline</button>*/}

		                &nbsp; &nbsp;&nbsp;&nbsp;

		                  <button onClick={(e) =>delthis(data.id)}>Delete</button>

		                </td>
		              </tr>
		          ))}
		            </tbody>
		        </table>
		      </div>  
		    	}
		      </div>
		  }
		</>
	)
}