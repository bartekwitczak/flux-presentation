'use strict';

const _ = require('lodash');
const React = require('react');
const TalksStore = require('./talks-store');
const Talk = require('./talk-component');

module.exports = React.createClass({
    displayName: 'Talks',

    getDefaultProps: function() {
        return {
            store: TalksStore.store
        };
    },

    getInitialState: function() {
        return {
            talks: this.props.store.talks
        };
    },

    componentDidMount: function() {
        const { CHANGED } = TalksStore.events;
        this.props.store.on(CHANGED, () => {
            this.setState({
                talks: this.props.store.talks
            });
        });
    },

    render: function() {
        const talkComponents = _.map(this.state.talks, (t) => {
            return (<Talk talk={t} key={t.id}/>);
        });
        return (
            <div>
                {talkComponents}
            </div>
        );
    }
});
