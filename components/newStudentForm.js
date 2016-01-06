import React from 'react'

const NewStudentForm = React.createClass({

	render: function(){
		return (
			<form className="form-horizontal">
			  <div className="form-group">
			    <label className="col-sm-2 control-label">Name</label>
			    <div className="col-sm-10">
			      <input type="text" className="form-control" id="studentName" onChange={this.props.onChange} placeholder="name"/>
			    </div>
			  </div>
			</form>
		)

	}

})

export default NewStudentForm