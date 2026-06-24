import "../../App.css"

import {Link} from 'react-router-dom'

export default function Navbar(){

	var navstyle = {
			display:'flex',
			justifyContent:'space-around',
			border : '1px solid red',
	}

	return (
			<nav style={navstyle}>


			{/*menu part here*/}
				<h2 style={{border : '1px solid blue',margin : 0,padding : 0}}>
					<Link to="/">Movie explorer</Link>
				</h2>

				<Link to="/" style={{border : '1px solid grey',margin : 0,padding : 0,alignContent : "center"
				}}>Home</Link>
			</nav>
	)
}