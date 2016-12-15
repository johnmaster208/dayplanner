"use strict";

var Dispatcher = require('../dispatchers/FluxDispatcher.js');
var ActionTypes = require('./types.js');
var ApptStore = require('../stores/AppointmentStore');
var AppointmentAPI = require('../api/AppointmentAPI');
$ = jQuery = require('jquery');
var Bootstrap = require('bootstrap');



var ApptActions = {
	book: function(appt) {
		console.log("Sending payload from action dispatcher via " + ActionTypes.BOOK + " action.", appt);
		Dispatcher.dispatch({
			actionType: ActionTypes.BOOK,
			appt: appt
		});
	},
	adjust: function(appt) {
		console.log("Sending payload from action dispatcher via " + ActionTypes.ADJUST + " action.", appt);
		Dispatcher.dispatch({
			actionType: ActionTypes.ADJUST,
			appt: appt
		});
	},
	remove: function(appt) {
		console.log("Sending payload from action dispatcher via " + ActionTypes.REMOVE + " action.", appt);
		Dispatcher.dispatch({
			actionType: ActionTypes.REMOVE,
			appt: appt
		});
	}
};


module.exports = ApptActions;