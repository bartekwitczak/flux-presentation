const Dispatcher = require('../../core/dispatcher');
const TalkActions = require('./talks-actions');
const StoreFactory = require('./talks-store');

describe('TalksStore', () => {

    var dispatcher;

    beforeEach(() => {
        dispatcher = Dispatcher.create();
    });

    it('initialize with empty talks', () => {
        const store = StoreFactory.create(dispatcher);

        expect(store.talks).toEqual([]);
    });

    it('fetches data on pick talks', (done) => {
        const actions = TalkActions.create(dispatcher);
        const store = StoreFactory.create(dispatcher);

        store.on(StoreFactory.events.CHANGED, () => {
            expect(store.talks.length).toEqual(4);
            done();
        });

        actions.pickTalks();
    });
});
