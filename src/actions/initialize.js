"use strict";

var Dispatcher = require('../dispatchers/FluxDispatcher.js');
var ActionTypes = require('./types.js');
var AppointmentAPI = require('../api/AppointmentAPI');

var InitActions = {
	bootstrap: function(){
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			data: {
				appts: AppointmentAPI.getAllAppointments()
			}
		});
	}
};

module.exports = InitActions;