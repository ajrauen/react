import React from 'react'
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router'

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

	setRememeberMe:function(){
		localStorage.setItem('user',this.state.rememberMe? this.state.user:"");
		localStorage.setItem('pass',this.state.rememberMe? this.state.pass:"");	
		localStorage.setItem('rememberMe',this.state.rememberMe? true:false);	
	},

	onChange:function(evt){
		switch(evt.target.id){
			case 'userName':{
				this.setState({user: evt.target.value})
				break;
			}
			case 'pass':{
				this.setState({pass: evt.target.value})
				break;
			}
		}
	},

	doRememberMe:function(evt){
		this.setState({rememberMe: evt.target.checked})
	},

	signIn:function(evt){
		evt.preventDefault();
		this.setRememeberMe();
		this.props.dispatch({type:'SIGN_IN'})
		this.props.dispatch(pushPath('/'));
	},

	render:function(){
		var name = this.state.user,
			pass = this.state.pass,
			checked = this.state.rememberMe;

		return (
			<div className="well mainWell">
		    	<form className="form-horizontal">
				  <div className="form-group">
				    <label className="col-sm-2 control-label">User Name</label>
				    <div className="col-sm-10">
				      <input type="text" className="form-control" id="userName" placeholder="User Name" value={name} onChange={this.onChange} />
				    </div>
				  </div>
				  <div className="form-group">
				    <label className="col-sm-2 control-label">Password</label>
				    <div className="col-sm-10">
				      <input type="password" className="form-control" id="pass" placeholder="Password" value={pass}  onChange={this.onChange}/>
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10">
				      <div className="checkbox">
				        <label>
				          <input type="checkbox" onChange={this.doRememberMe} checked={checked} /> Remember me
				        </label>
				      </div>
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10"> 
				      <button type="submit" className="btn btn-default" onClick={this.signIn}>Sign in</button>
				    </div>
				  </div>
				</form>
				        {this.props.children}

			</div>
		)		
	}
})

export default connect()(Login)