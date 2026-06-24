import { useState ,useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import {Routes,Route,useNavigate} from 'react-router-dom'

import AddEdituser from './pages/AddEdituser'
import Home from './pages/home'

import Search from './pages/search'





function App() {

var [api,setApi] = useState([]);



var baseurl = 'http://localhost:5000/users/';

var baseurl2 = 'http://localhost:5000/users'


var navigate = useNavigate();

  // var {id} = useParams();

  var delthis = async (id) =>{

    if(confirm(`Are yur sure you want to delete this id : ${id} data`)){
      var res = await fetch(baseurl+`${id}`,{

                  method : 'DELETE'

                });

      var data = await res.json();

      if(data){
        setApi(prev => prev.filter(item =>item.id !== `${id}` ) );
      }
    }
    else{
      return false;
    }
    


  }

  


  



 


  return (
    <div>
      {/*sabse pehle json server install kre from npmjs*/}
      <h1>anclkalkclanslcsnlcnsc</h1>
      <h1>anclkalkclanslcsnlcnsc</h1>
      <Routes>
        <Route path="/" element={<Home api={api} setApi={setApi} baseurl2={baseurl2} 
          delthis={delthis}   />} />

        <Route path="/add user" element={<AddEdituser baseurl={baseurl} />} />
        <Route path="/edit user/:id" element={<AddEdituser baseurl={baseurl} />} />
        {/*<Route path="/delete user/:id" element={<Deleteuser setApi={setApi} baseurl={baseurl} />} />*/}
      </Routes>
      <h1>anclkalkclanslcsnlcnsc</h1>
      <h1>anclkalkclanslcsnlcnsc</h1>
    </div>
  )
}

export default App
