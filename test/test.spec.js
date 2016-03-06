import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);


const TestComponent = ({greeting}) => (
    <div>{greeting}</div>
);

describe('TestComponent', () => {
  it('should have the same JSX output',()=> {
    const renderer = TestUtils.createRenderer();
    renderer.render(<TestComponent greeting='hello' />);
    const actual = renderer.getRenderOutput();
    const expected = (
      <div>hello</div>
    );
    expect(actual).toIncludeJSX(expected);
  });
});
