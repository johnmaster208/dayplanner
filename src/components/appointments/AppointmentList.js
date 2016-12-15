"use strict";
var React = require('react');
var Appointment = require('./Appointment.js');
$ = jQuery = require('jquery');
var bs = require('bootstrap');

var AppointmentList = React.createClass({
	render: function(){
		var click = this.props.onClick;
		return (
			<div>
				{
					this.props.appts.map(function(appt, index) {
						return (
							<div>
								<Appointment appt={appt} key={index} onClick={click} />
							</div>
						);
					})
				}
					
			</div>
		);
	}
});

module.exports = AppointmentList;