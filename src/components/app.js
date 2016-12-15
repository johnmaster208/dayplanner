/*eslint-disable strict*/
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		);

	}
});

module.exports = App;