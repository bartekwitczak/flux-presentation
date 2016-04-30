'use strict';

const talksJSON = require('../../../talks.json');

const defaultDispatcher = require('../../core/dispatcher').dispatcher;
const EventEmitter = require('../../core/event-emitter').EventEmitter;

const { PICK_TALKS } = require('./talks-actions').events;

const EVENTS = {
    CHANGED: 'talks-store-changed'
};

const handlers = {
    [PICK_TALKS]: function() {
        this.talks = talksJSON;
        this.emit(EVENTS.CHANGED);
    }
};

const talksStoreFactory = (dispatcher) => {
    const store = {
        __proto__: new EventEmitter(),

        dispatchToken: dispatcher.register((action) => {
            const handler = handlers[action.type];
            if (handler) {
                handler.call(store, action);
            }
        }),

        talks: []
    };
    return store;
};

module.exports = {
    create: talksStoreFactory,
    store: talksStoreFactory(defaultDispatcher),
    events: EVENTS
};
