// install kre npmjs se yup package ko 
// command npm i yup

import * as yup from 'yup'



	// restrictedwords sirf lowercase mai de compare ke liye
	var restrictedwords = ['admin','administrator','root','guest','support','moderator'];

export var skills = ['analysing','mis','excel','net surf'];


export var validations = yup.object({

	


	name : yup.string().required('Name is required')
		   .matches(/^[a-zA-Z]+ [a-zA-Z]+$/,'name must be in alphabets and only one space allowed inbetween first and last name should be there after space')
		   .min(3,'characters must be atleast 3').trim().lowercase(),

	singlename : yup.string().required('singlename required')

					// test main pehle random naam and 2 - message and then validation function
				 // .test(
			   	// 	'no-admin',
			   	// 	'this name is reserved and cannot be used',
			   	// 	value => value?.toLowerCase() != 'admin'
		   		 //  )

				 				// OR for multiple
				 .test(
			   		'no-admin',
			   		'this name is reserved and cannot be used',
			   		 value => !restrictedwords.includes(value.toLowerCase())
		   		  )
				 .matches(/^[A-za-z]+$/,'only alphabets allowed')
				 .trim(),



	email : yup.string()
			.when('age',{
				// here checking if age is met and then this validations
				is : age => age>=22,
				then : val => val.required('email is required for age 22 or above')
					   .email('invalid email').matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,'invalid pattern'),
				otherwise : val => val.notRequired()
			}),
			// .test(
			//    'check duplicate email',
			//    'This email already exits in database',
			//    async value  =>{
			//    		var res = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
			//    		var data = await res.json();

			//    		return data.length === 0
			//    } 
			// ),

	password : yup.string().required('password is required')
			   .matches(/[A-Z]/,'atleast one uppercase letter')
			   .matches(/[a-z]/,'atleast one lowercase letter')
			   .matches(/[0-9]/,'atleast one number')
			   .min(6,'password must be 6 characters'),

	// oneOf method compare krne ke liye and ref for whom to compare with		   
	re_password : yup.string().required('please re-enter password')
				  .oneOf([yup.ref('password')], 'password must match'),



	age : yup.number().required('age is required').positive('only positive value')
		  .min(18,'age must be atleast 18').truncate(),


	skills : yup.array()
			 .of(yup.string())
			 .min(2,'select altleast 2 skills')
			 .max(3,'max 3 skills allowed')
})