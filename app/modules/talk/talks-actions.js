const defaultDispatcher = require('../../core/dispatcher').dispatcher;

const EVENTS = {
    PICK_TALKS: 'pick-talks'
};

const actionsFactory = (dispatcher) => {
    return {
        pickTalks: () => {
            dispatcher.dispatch({
                type: EVENTS.PICK_TALKS
            });
        }
    };
};

module.exports = {
    create: actionsFactory,
    actions: actionsFactory(defaultDispatcher),
    events: EVENTS
};
