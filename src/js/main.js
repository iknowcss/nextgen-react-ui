import React from 'react/addons';
import DemoLoader from './demo/demoloader';

const element = <DemoLoader/>;

React.render(
  element,
  document.getElementById('app-container')
);

document.body.ondblclick = function () {
  console.log(React.renderToString(element));
};