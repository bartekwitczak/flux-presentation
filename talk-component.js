const React = require('react');

module.exports = React.createClass({
    displayName: 'TalkComponent',

	render: () => {
		return (
			<div>
				<h1>Flux - new/old approach to building frontend</h1>
				<h4>Room: 123</h4>
				<p>We all know that in Javascript world ...</p>
				<hr />
				<p>Bartłomiej Witczak, Eager to learn, JS and JVM passionate</p>
			</div>
		);
	}
});
