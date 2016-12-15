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
	switch(action.actionType){
		case ActionTypes.INITIALIZE:
			_appts = action.data.appts;
			ApptStore.emitChange();
		break;
		case ActionTypes.BOOK:
			//debugger;
			action.appt.isBooked = true;
			var currentSlot = _.find(_appts, {id: action.appt.id});
			//debugger;
			var slotIndex = _.indexOf(_appts, currentSlot);
			//debugger;
			_appts.splice(slotIndex, 1, action.appt);
			//debugger;
			ApptStore.emitChange();
		break;
		case ActionTypes.ADJUST:
			//var existingAuthor = _.find(_authors, {id: action.author.id});
			//var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
			//_authors.splice(existingAuthorIndex, 1, action.author);
			ApptStore.emitChange();
		break;
		case ActionTypes.REMOVE:
			//debugger;
			//_.remove(_authors, function(author) {
			//	return action.id === author.id;
			//});
			ApptStore.emitChange();
		break;
		default: 
			
		break;

	}
});


module.exports = ApptStore;

