import React from 'react';
import expect from 'expect';
import { render, fakeDOM } from 'helpers/render';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

fakeDOM();

const TestComponent = ({greeting}) => (
    <div>{greeting}</div>
);

describe('TestComponent', () => {
  it('should have the same JSX output',()=> {
    const actual = render(<TestComponent greeting='hello' />)
    const expected = (
      <div>hello</div>
    );
    expect(actual).toIncludeJSX(expected);
  });
});
