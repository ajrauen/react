import React from 'react'
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router'
import NavBar from '../components/navbar.js'
import SignOut from '../components/signOut.js'
import Class from './class.js'


var Index = React.createClass ({

	signout:function(){
		this.props.dispatch({type:'SIGN_OUT'})
		this.props.dispatch(pushPath('/'));
	},

	login:function(){
		this.props.dispatch(pushPath('/login'));
	},

	render(){
		if(this.props.auth){

			return <SignOut onClick={this.login} />
		}
		  return (
		  	<div>
			  	<NavBar onClick={this.signout}/>

			  	<ul className="nav nav-pills nav-stacked col-md-2">
				  <li role="presentation" className="active"><a href="#class">Class</a></li>
				</ul>

				<div className="tab-content col-md-10">
				    <div role="tabpanel" className="tab-pane active " id="class">
				    	<Class/>
				    </div>

				</div>	
		  	</div>
		  )

	}
})

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Index)

