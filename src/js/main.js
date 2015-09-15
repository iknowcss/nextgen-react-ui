import React from 'react/addons';
import Demo from './demo/inputselect';

const element = <Demo/>;

React.render(
  element,
  document.getElementById('app-container')
);

document.body.ondblclick = function () {
  console.log(React.renderToString(element));
};