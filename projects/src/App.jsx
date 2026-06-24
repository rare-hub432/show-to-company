
import './App.css'


import Todos_app_project from './todos_app_project/Todos_app_project.jsx'






import Expenseform from "./expense tracker project/expenseform"

import Expenselist from "./expense tracker project/Expenselist"



import {useState,useEffect} from 'react'



import Moviebox_main from './movie project/Moviebox_main'

import Sh_index from './shopping_cart_project/shop_main.jsx'



import Quiz_main from './quiz_app_project/quiz_main'

import Yup_form_main from './yup form validation/yup_form_main.jsx'

function App() {
  


  // for expenses project
  var [expenses,setExpenses] = useState(() =>{

    var saved = localStorage.getItem('expense no')

    return saved ? JSON.parse(saved) : [];
  })


// for localstorage save here
  
  useEffect(() =>{
    localStorage.setItem('expense no',JSON.stringify(expenses))
  },[expenses])

  var addExpense = (newdata) =>{
   setExpenses((prev) => [...prev,newdata])

    // console.log(expenses)
  }


  var delexpense = (expenseid,expensetitle) =>{

    if(confirm(`are you sure you want to delete task : "${expenseid} : ${expensetitle}" `)){

      var newexpenses =  expenses.filter((item) =>item.id !== expenseid)

      setExpenses(newexpenses)

    }
    else{
      return false;
    }
  }


  return (
    <div style={{width:"100%"}}>

    <Todos_app_project />


    {/* expense project */}
    <Expenseform onAddExpense={addExpense}/>
        
        <Expenselist expenses={expenses} delexpense={delexpense}/>


           
      {/* movie project */}
        <Moviebox_main />


      {/* shop cart project */}
        <Sh_index />



        <Quiz_main />


        <Yup_form_main />
    </div>
  )

 
}

export default App