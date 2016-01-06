import React from 'react'

const StudentList = React.createClass ({


	render:function(){
	var studentList = this.props.studentData.map(function(student) {
	      return (
	        <ul key={student.name}>
	        	<li>{student.name}</li>
	        </ul>
	      );
	    });

	  return (
	  	<div className="studentList">
		  	<div className= "col-md-12">
		  		<button className="btn btn-primary col-md-5" onClick={this.props.showCreateStudent}>Create</button>
		  		<button className="btn btn-danger col-md-6 col-md-offset-1">Remove</button>
		  	</div>
		  	<div className="col-md-12">
		  		{studentList}
		  	</div>

	  	</div>
	  )

	}
})


export default StudentList

