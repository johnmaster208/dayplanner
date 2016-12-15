/*eslint-disable strict*/
"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var AppointmentStore = require('./stores/AppointmentStore');
var init = require('./actions/initialize.js');
$ = jQuery = require('jquery');

init.bootstrap();

Router.run(routes, function(Handler){
	React.render(<Handler />, document.getElementById('app'));
});
