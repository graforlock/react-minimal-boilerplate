import React from 'react';
import TestUtils from 'react-addons-test-utils';

const render = (component) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
};

export { render };
