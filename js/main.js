import React from 'react'

var Login = React.createClass ({

	getInitialState :function(){
		var u = localStorage.getItem('user'),
			p = localStorage.getItem('pass'),
			r = localStorage.getItem('rememberMe')

		if(!r){
			r = false;
		}

		var s = {user:u? u:"",pass:p? p:"", rememberMe:r}
		return s;
	},



	render:function(){
		return "HI"
	}
})

export default Login