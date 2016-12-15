"use strict";
var Dispatcher = require('../dispatchers/FluxDispatcher.js');
var ApptActions = require('../actions/appointments.js');
var ActionTypes = require('../actions/types.js');
var AppointmentAPI = require('../api/AppointmentAPI');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var EVENT = 'change';

//private storage
var _appts = [];

//public API for this store
var ApptStore = assign({}, EventEmitter.prototype, {

	//these 3 are for notifying the store of updates
	addChangeListener: function(callback) {
		this.on(EVENT, callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener(EVENT, callback);
	},
	emitChange: function(){
		this.emit(EVENT);
	},
	//these two are for fetching data from our "mock" api
	fetchAppts: function(){
		//_appts = AppointmentAPI.getAllAppointments();
		return _appts;
	},
	fetchApptById: function(id){
		return _.find(_appts, {id: id});
	}
});

Dispatcher.register(function(action){
	if(action.actionType !== 'INITIALIZE'){
		var currentSlot = _.find(_appts, {id: action.appt.id});
		var slotIndex = _.indexOf(_appts, currentSlot);
	}
	switch(action.actionType){
		case ActionTypes.INITIALIZE:
			_appts = action.data.appts;
			ApptStore.emitChange();
		break;
		case ActionTypes.BOOK:
			action.appt.isBooked = true;
			_appts.splice(slotIndex, 1, action.appt);
			console.log('The ApptStore successfully received a dispatched action ' + action.actionType);
			console.log('Store sending emitChange event to interface components');
			ApptStore.emitChange();
		break;
		case ActionTypes.ADJUST:
			_appts.splice(slotIndex, 1, action.appt);
			console.log('The ApptStore successfully received a dispatched action ' + action.actionType);
			console.log('Store sending emitChange event to interface components');
			ApptStore.emitChange();
		break;
		case ActionTypes.REMOVE:
			action.appt.isBooked = false;
			action.appt.name = "";
			action.appt.phone = "";
			_appts.splice(slotIndex, 1, action.appt);
			console.log('The ApptStore successfully received a dispatched action ' + action.actionType);
			console.log('Store sending emitChange event to interface components');
			ApptStore.emitChange();
		break;
		default: 
			
		break;

	}
});


module.exports = ApptStore;

