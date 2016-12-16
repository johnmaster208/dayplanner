"use strict";
var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={require('./components/app.js')}>
		<DefaultRoute handler={require('./components/dashboard.js')} />
		<Route name="dashboard" path="/dashboard" handler={require('./components/dashboard.js')} />
		<Redirect from="*" to="dashboard" />
	</Route>
);

module.exports = routes;