import React from 'react'

const signOut  = React.createClass({

	render:function(){

		return (
			<div className="well mainWell text-center">
		    	<h1>You've successfully logged out!</h1>
				<button className="btn btn-primary" onClick={this.props.onClick}>Log In</button>
			</div>
		)		
	}

})

export default signOut;