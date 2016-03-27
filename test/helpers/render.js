import jsdom from 'jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const render = (component) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
};

const fakeDOM = () => {
  global.document = jsdom.jsdom("<!doctype html><body></body></html>");
  global.window = document.parentWindow;
  global.navigator =  { userAgent: 'node.js'};
  require('react/lib/ExecutionEnvironment').canUseDOM = true;
};

export { render, fakeDOM };
