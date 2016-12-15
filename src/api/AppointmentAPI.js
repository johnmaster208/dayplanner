"use strict";
var appts = require('./data.js').appts; //some appointment data that's already built
var guid = require('guid'); //for objectIDs
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(author) {
    var id = guid.raw();
    return id;
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var AppointmentAPI = {

    getAllAppointments: function(){
        return _clone(appts);
    },
    getAppointmentById: function(id) {
        var appt = _.find(appts, {id: id});
        return _clone(appt);
    },
    updateAppointment: function(appt) {
        //pretend an ajax call to web api is made here
        console.log('Appointment was just updated...');
        
        if (appt.id) {
            var apptExists = _.indexOf(appts, _.find(appts, {id: appt.id})); 
            appts.splice(apptExists, 1, appt);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new authors in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            appt.id = _generateId(appt);
            appts.push(appt);
        }

        return _clone(appt);
    },
    deleteAppointment: function(id) {
        console.log('Pretend this just deleted an appointment.');
        _.remove(appts, { id: id});
    }
};

module.exports = AppointmentAPI;