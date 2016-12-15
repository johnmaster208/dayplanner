"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link; 

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="app">
						<img src="images/logo.png" />
					</Link>
					<ul className="nav navbar-nav">
						<li><Link to="app">Home</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
});


module.exports = Header;