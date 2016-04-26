const React = require('react');
const ReactDOM = require('react-dom');
const TalkComponent = require('./talk-component');

const Main = React.createClass({
    render: () => {
        return (
            <div>
                <TalkComponent />
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('main'));
