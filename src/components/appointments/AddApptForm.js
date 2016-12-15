"use strict";
var React = require('react');
var Router = require('react-router');
var ApptActions = require('../../actions/appointments.js');
var AppointmentStore = require('../../stores/AppointmentStore');
var toastr = require('toastr');

var AddApptForm = React.createClass({

	render: function() {
		return (
			<div id="addApptForm" className="modal fade" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button className="close" type="buton" data-dismiss="modal">Close</button>
						</div>
						<div className="modal-body">
							<h1>Add new appointment @ {this.props.appt.label}</h1>
							<p className="text-muted">Duration will be 1 hour.</p>
							<form role="form" onSubmit={this.props.onSubmit}>
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<div className="field">
										<input 
										type="text"
										name="name"
										className="form-control input-lg"
										value={this.props.appt.name}
										ref="name"
										onChange={this.props.onChange}
										placeholder="Enter name..." />
									</div>	
								</div>
								<div className="form-group">
									<label htmlFor="phone">Phone</label>
									<div className="field">
										<input 
										type="text"
										name="phone"
										className="form-control input-lg"
										value={this.props.appt.phone}
										ref="phone"
										onChange={this.props.onChange}
										placeholder="Enter phone..." />
									</div>	
								</div>
								<button
								className="btn btn-primary"
								onClick={this.props.onSave.bind(null,{event: event, action: "book", data: this.props.appt})}
								>
								Add Appointment
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);

	}

});
			

module.exports = AddApptForm;