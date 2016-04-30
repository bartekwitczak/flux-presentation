'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const { actions } = require('./app/modules/talk/talks-actions');
const Talks = require('./app/modules/talk/talks-component');

const Main = React.createClass({
    render: () => {
        return (
            <div>
                <a onClick={actions.pickTalks}>Pick talks</a>
                <Talks/>
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('main'));
