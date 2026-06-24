
import {useState,useEffect} from 'react'

export default function usetimer(seconds){

	var [time,setTime] = useState(seconds)


	useEffect(() =>{
		
		var interval = setInterval(() =>{
			setTime(prev =>prev-1)
		},1000)

		return () =>{
			clearInterval(interval);
		}

	},[time])

	return {time,reset : () =>setTime(seconds)}
}