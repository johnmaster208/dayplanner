"use strict";
var React = require('react');
var Router = require('react-router');
var ApptActions = require('../../actions/appointments.js');
var AppointmentStore = require('../../stores/AppointmentStore');
var toastr = require('toastr');

var EditApptForm = React.createClass({

	render: function(){
		return (
			<div id="editApptForm" className="modal fade" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button className="close" type="buton" data-dismiss="modal">&times;</button>
						</div>
						<div className="modal-body">
							<h1>Update Appointment @ {this.props.appt.label}</h1>
							<p>You may also remove the appointment using the "Delete Appointment" button</p>
							<form role="form" onSubmit={this.props.onSubmit}>
								<div className="form-group">
									<label htmlFor="form-group">Name</label>
										<div className="field">
											<input 
												type="text" 
												name="name" 
												className="form-control input-lg" 
												placeholder="Enter name..." 
												value={this.props.appt.name}
												ref="name"
												onChange={this.props.onChange} 
												/>
										</div>
									</div>
									<div className="form-group">
									<label htmlFor="form-group">Phone</label>
										<div className="field">
											<input 
												type="text" 
												name="phone" 
												className="form-control input-lg" 
												placeholder="Enter phone..." 
												value={this.props.appt.phone}
												ref="phone"
												onChange={this.props.onChange} 
												/>
										</div>
								</div>
								<button 
								name="update"
								className="btn btn-primary" 
								value="update" 
								onClick={this.props.onSave.bind(null,{event: event, action: "update", data: this.props.appt})}
								>
								Update Appointment
								</button>
								&nbsp;
								<button 
								name="remove"
								className="btn btn-danger" 
								value="delete"
								onClick={this.props.onSave.bind(null,{event: event, action: "delete", data: this.props.appt})}
								>
								Delete Appointment
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = EditApptForm;
			