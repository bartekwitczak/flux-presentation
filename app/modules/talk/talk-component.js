'use strict';

const React = require('react');

module.exports = React.createClass({
    displayName: 'Talk',

	render: function() {
		return (
			<div>
				<h1>{this.props.talk.title}</h1>
				<p>{this.props.talk.description}</p>
				<p>{this.props.talk.speaker}</p>
			</div>
		);
	}
});
