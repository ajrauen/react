import React from 'react';
import NewStudentForm from './newStudentForm.js'

const AddStudent = React.createClass({

	onChange:function(evt){
		if(evt.target.id === "studentName"){
			this.setState({name: evt.target.value,seat:undefined})
		}
	},

	onClick:function(){
		this.props.addStudent(this.state)
	},

	render(){
		return(
			<div className="modal fade"  role="dialog" id={this.props.id}>
			  <div className="modal-dialog">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title">Modal title</h4>
			      </div>
			      <div className="modal-body">
			        <NewStudentForm onChange={this.onChange} />
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary" onClick={this.onClick}>Add Student</button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
	

})

export default AddStudent