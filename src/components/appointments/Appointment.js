"use strict";
var React = require('react');
var AddApptForm = require('./AddApptForm');
var EditApptForm = require('./EditApptForm');

var Appointment = React.createClass({

	render: function(){
		// console.log(this.props);
		if(this.props.appt.isBooked){
			return (
				<a 
				href="#" 
				className={"timeslot list-group-item list-group-item-action " + (this.props.appt.isBooked ? 'list-group-item-danger' : '') }
				onClick={this.props.onClick.bind(null, this.props.appt)}
				>
					<div className="row">
						<div className="col-xs-6 col-md-3">
							<h1 className="hour-marker lead text-muted">{this.props.appt.label}</h1>
						</div>
						<div className="col-xs-6 col-md-9">
							<div className="list-group-item-heading">
								<p className="appt-name">{this.props.appt.name}</p>
							</div>
							<div className="list-group-item-text">
								<p className="appt-phone text-secondary">{this.props.appt.phone}</p>
							</div>
						</div>
					</div>
				</a>
			);
		} else {
			return (
				<a 
				href="#" 
				className={"timeslot list-group-item list-group-item-action " + (this.props.appt.isBooked ? 'list-group-item-danger' : '') }
				onClick={this.props.onClick.bind(null, this.props.appt)}
				>
					<div className="row">
						<div className="col-xs-6 col-md-3">
							<h1 className="hour-marker lead text-muted">{this.props.appt.label}</h1>
						</div>
						<div className="col-xs-6 col-md-9">
							<div className="list-group-item-heading">
								<p className="appt-name-empty">Click to reserve</p>
							</div>
							<div className="list-group-item-text">
								<p className="appt-phone text-secondary"></p>
							</div>
						</div>
					</div>
				</a>
				
			);
		}
			
	}
});

module.exports = Appointment;
