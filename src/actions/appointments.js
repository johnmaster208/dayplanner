"use strict";

var Dispatcher = require('../dispatchers/FluxDispatcher.js');
var ActionTypes = require('./types.js');
var ApptStore = require('../stores/AppointmentStore');
var AppointmentAPI = require('../api/AppointmentAPI');
$ = jQuery = require('jquery');
var Bootstrap = require('bootstrap');



var ApptActions = {
	book: function(appt) {
		//debugger;
		//var apptToBeBooked = AppointmentAPI.updateAppointment(appt);
		//debugger;
		//Hey disptacher, go tell all the stores that an author was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.BOOK,
			appt: appt
		});
	},
	adjust: function(appt) {
		//var apptToBeUpdated = AppointmentAPI.updateAppointment(appt);
		Dispatcher.dispatch({
			actionType: ActionTypes.ADJUST,
			appt: appt
		});
	},
	remove: function(appt) {
		//var apptToBeRemoved = AppointmentAPI.removeAppt(appt.id);
		//async api calls can be made here
		Dispatcher.dispatch({
			actionType: ActionTypes.REMOVE,
			appt: appt
		});
	}
};


module.exports = ApptActions;