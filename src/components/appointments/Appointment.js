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
				className={"list-group-item list-group-item-action " + (this.props.appt.isBooked ? 'list-group-item-danger' : 'list-group-item-success') }
				onClick={this.props.onClick.bind(null, this.props.appt)}
				>
					<div className="row">
						<div className="hour-marker col-xs-6 col-md-3">
							<h1 className="text-muted">{this.props.appt.label}</h1>
						</div>
						<div className="col-xs-6 col-md-9">
							<div className="list-group-item-heading">
								<p className="text-muted text-uppercase">{this.props.appt.name}</p>
							</div>
							<div className="list-group-item-text">
								<p className="text-secondary">{this.props.appt.phone}</p>
							</div>
						</div>
					</div>
				</a>
			);
		} else {
			return (
				<a 
				href="#" 
				className={"list-group-item list-group-item-action " + (this.props.appt.isBooked ? 'list-group-item-danger' : 'list-group-item-success') }
				onClick={this.props.onClick.bind(null, this.props.appt)}
				>
					<div className="row">
						<div className="hour-marker col-xs-6 col-md-3">
							<h1 className="text-muted">{this.props.appt.label}</h1>
						</div>
						<div className="col-xs-6 col-md-9">
							<div className="list-group-item-heading">
								<p className="text-muted text-uppercase">Available</p>
							</div>
							<div className="list-group-item-text">
								<p className="text-secondary">{this.props.appt.phone}</p>
							</div>
						</div>
					</div>
				</a>
				
			);
		}
			
	}
});

module.exports = Appointment;
