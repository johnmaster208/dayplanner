"use strict";
var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/Dashboard')} />
		<Route name="dashboard" path="/dashboard" handler={require('./components/Dashboard')} />
		<Redirect from="*" to="dashboard" />
	</Route>
);

module.exports = routes;