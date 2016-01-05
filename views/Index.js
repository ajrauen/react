import React from 'react'
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router'
import NavBar from '../components/navbar.js'
import SignOut from '../components/signOut.js'


var Index = React.createClass ({

	signout:function(){
		this.props.dispatch({type:'SIGN_OUT'})
		this.props.dispatch(pushPath('/'));
	},

	login:function(){
		this.props.dispatch(pushPath('/login'));
	},

	render(){
		if(!this.props.auth){

			return <SignOut onClick={this.login} />
		}
		  return (
		  	<NavBar onClick={this.signout}/>
		  )

	}
})

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Index)

