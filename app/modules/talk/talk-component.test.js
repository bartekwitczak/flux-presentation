const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const Talk = require('./talk-component');

describe('Talk', function () {
  it('renders without problems', function () {
    const t = { title: "Flux", speaker: "Bartek", description: "Pure magic"};
    const talk = TestUtils.renderIntoDocument(<Talk talk={t}/>);

    const header = TestUtils.findRenderedDOMComponentWithTag(talk, 'h1');

    expect(header.textContent).toEqual('Flux');
  });
});
