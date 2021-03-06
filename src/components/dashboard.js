"use strict";
var React = require('react');
var ApptStore = require('../stores/AppointmentStore');
var Actions = require('../actions/appointments.js');
var AppointmentList = require('./appointments/AppointmentList');
var AddApptForm = require('./appointments/AddApptForm');
var EditApptForm = require('./appointments/EditApptForm');
var toastr = require('toastr');
var $ = require('jquery');
var Bootstrap = require('bootstrap');


var Dashboard = React.createClass({
	getInitialState: function(){
		console.log("Initial State was loaded Correctly.");
		return { 
			appt: {},
			appts: ApptStore.fetchAppts(),
			onClick: this.handleClickState,
			errors: {},
			dirty: false
		};
	},
	//When component mounts, attach change listener _onChange to it
	componentWillMount: function() {
		ApptStore.addChangeListener(this._onChange);
	},
	//when component unmounts, remove change listener _onChange from it
	componentWillUnmount: function() {
		ApptStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		console.log("Application state change detected. Reloading timeslot data...");
		this.setState({ appts: ApptStore.fetchAppts() });
	},
	handleDefaultFormAction: function(e){
		e.preventDefault();
		return;
	},
	handleClickState: function(e){
		var apptIsBooked = typeof e !== undefined && e.isBooked === true ? e.isBooked : false;
		if(apptIsBooked){
			//if the appointment is booked, load the data into state
			console.log('User interacted with a BOOKED appointment.');
			var updateStateObj = { id: e.id, label: e.label, isBooked: e.isBooked, name: e.name, phone: e.phone };
			this.setState({appt: updateStateObj});
			//render the edit form
			$('#editApptForm').modal();
		} else {
			//if booking a new appt, clear any state fields
			console.log('User is attempting to create a NEW appointment');
			this.setState({appt: ""});
			//get the label and 
			var addStateObj = {id: e.id, label: e.label, isBooked: e.isBooked, name: e.name, phone: e.phone};
			//assign the new state
			this.setState({appt: addStateObj});
			//render the add form
			$('#addApptForm').modal();//console.log(" e was false");
		}
	},
	setDynamicApptState: function(e){
		this.setState({dirty: true});
		var field = e.target.name;
		var value = e.target.value;
		this.state.appt[field] = value;
		return this.setState({ appt: this.state.appt });
	},
	handleBook: function(obj) {
		obj.event.preventDefault();
		if(!this.addApptFormIsValid()) {
			var errorMsg = "We found some errors with the form: \n";
			for(var key in this.state.errors){
				errorMsg += "- " + this.state.errors[key] + "\n";
			}
			alert(errorMsg);
			return;
		} else {
			console.log("Timeslot 'book' action detected from state");
			Actions.book(this.state.appt);
			$('#addApptForm').modal('hide');
			toastr.success('New Appointment Added!');
		}
		
	},
	handleAdjust: function(obj){
		obj.event.preventDefault();
		if(obj.action === 'update') {
			this.updateAppt(obj.data);
		} else if (obj.action === 'delete') {
			this.deleteAppt(obj.data);
		}
	},
	updateAppt: function(data) {
		Actions.adjust(data);
		$('#editApptForm').modal('hide');
		toastr.warning('Appointment updated!');
	},
	deleteAppt: function(data) {
		Actions.remove(data);
		$('#editApptForm').modal('hide');
		toastr.error('Appointment was removed.');
	},
	addApptFormIsValid: function(){
		var addFormValid = true;
		this.state.errors = {};
		if(this.state.appt.name.length < 1) {
			this.state.errors.name = "Name is a required field.";
			addFormValid = false;
		}
		if(this.state.appt.phone.length < 1) {
			this.state.errors.phone = "Phone is a required field.";
			addFormValid = false;
		}
		this.setState({errors: this.state.errors});
		return addFormValid;
	},
	render: function(){
		return (
			<div>
				<h1 className="page-header">REACTive Day Planner</h1>
				<div className="col-md-5">
					<h5 className="text-muted">Instructions:</h5>
					<p className="text-muted">Click a timeslot on the calendar to create an appointment.</p>
				</div>
				<div className="col-md-7">
					<div className="panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title lead">Timeslots</h3>
						</div>
						<ul id="apptgrid" className="list-group">
							<AppointmentList appts={this.state.appts} onClick={this.state.onClick} />
						</ul>
					</div>
				</div>
				<AddApptForm 
				appt={this.state.appt} 
				onChange={this.setDynamicApptState} 
				onSave={this.handleBook} 
				onSubmit={this.handleDefaultFormAction}/>
				<EditApptForm 
				appt={this.state.appt} 
				onChange={this.setDynamicApptState} 
				onSave={this.handleAdjust}
				onSubmit={this.handleDefaultFormAction}/>
			</div>
		);
	}
});

module.exports = Dashboard;