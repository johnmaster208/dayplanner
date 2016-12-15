$ = jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var AppointmentStore = require('./stores/AppointmentStore');
var init = require('./actions/initialize.js');

init.bootstrap();

Router.run(routes, function(Handler){
	React.render(<Handler />, document.getElementById('app'));
});
