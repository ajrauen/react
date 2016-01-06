import React from 'react'
import StudentList from '../components/studentList.js'
import AddStudent from '../components/addStudent.js'

import StudentSeating from './studentseating.js'


const defaultStudentData = {
	students:[
		{
			name:'Steve Messer',
			seat: undefined
		},
		{
			name:'Chloe Ems',
			seat: undefined
		},
		{
			name:'Mark Anker',
			seat: undefined
		}
	]

}

const Class = React.createClass ({

	getInitialState:function(){
		return {students:defaultStudentData.students}
	},

	assignStudent:function(){

	},



	addStudent:function(student){
		var students = this.state.students.slice()
		students.push(student)
		this.setState({ students: students })
		this.closeModal();
	},

	closeModal:function(){
		$('#addStudent').modal('hide')
	},

	showCreateStudent:function(){
		$('#addStudent').modal({
			backdrop:'static'
		})
	},

	render:function(){
	  return (
	  	<div>
		  	<div className="col-md-2">
		  		<StudentList studentData={this.state.students} showCreateStudent={this.showCreateStudent} assignStudent={this.assignStudent} />
		  	</div>

		  	<div className="col-md-9">
		  		<StudentSeating studentData={defaultStudentData.students} />
		  	</div>
		  	<AddStudent id="addStudent" addStudent={this.addStudent}/>
	  	</div>
	  )

	}
})


export default Class

