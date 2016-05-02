const Dispatcher = require('flux').Dispatcher;

module.exports = {
    dispatcher: new Dispatcher(),
    create: function() {
        return new Dispatcher();
    }
};
