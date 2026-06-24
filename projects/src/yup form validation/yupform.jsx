
import {useForm} from 'react-hook-form'


// install kre npmjs se @hookform/resolvers package ko 
// command npm i @hookform/resolvers

import { yupResolver } from '@hookform/resolvers/yup' 


import {validations} from './yup_validations'

import {skills} from './yup_validations'

export default function Yupform(){

	var {register,handleSubmit,formState} = useForm({
		mode:'onBlur',

		
		resolver : yupResolver(validations)
	});

	var {errors} = formState;

	function submit(formdata){
		console.log(formdata);
	}

	return(
		<>
			<h4 className="mt-4 mb-3">yup form here</h4>
			<form onSubmit={handleSubmit(submit)}>
				<input type="text" placeholder="name" 
					{...register('name')} /><br/>
				<p className="rederror">{errors.name?.message}</p>

				<input type="text" placeholder="singlename" 
					{...register('singlename')} /><br/>
				<p className="rederror">{errors.singlename?.message}</p>

				<input type="email" placeholder="Email required for age 22 or above" 
					{...register('email')}/><br/>
				<p className="rederror">{errors.email?.message}</p>

				<input type="" placeholder="Password" {...register('password')}/><br/>
				<p className="rederror">{errors.password?.message}</p>

				<input type="" placeholder="Confirmpassword" {...register('re_password')}/><br/>
				<p className="rederror">{errors.re_password?.message}</p>

				<input type="" placeholder="enter age" {...register('age')}/><br/>
				<p className="rederror">{errors.age?.message}</p>

				<label>skills : </label>&nbsp;
				{skills.map((skill) =>{
					return(
						<label htmlFor={skill}>
							<input type="checkbox" value={skill} {...register('skills')}/>&nbsp;{skill}&nbsp;
						</label>
					)
				})}
				<br/>
				<p className="rederror">{errors.skills?.message}</p>

				<button type="submit" className="btn btn-success">Register</button>
			</form>
		</>
	)
}