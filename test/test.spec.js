import React from 'react';
import expect from 'expect';
import { render } from 'helpers/render';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);


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
