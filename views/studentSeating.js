import React from 'react'
import Desk from '../components/desk.js'
const StudentSeating = React.createClass ({


	render:function(){

		var desks = this.props.studentData.map(function(student) {
	      return (
	        <Desk key={student.name}>

	        </Desk>
	      );
	    });


	  return (
	  	<div className="col-md-12 classroom">
		  	{desks}
	  	</div>
	  )

	}
})


export default StudentSeating

