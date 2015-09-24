import React, {Component} from 'react/addons';

export default {
  create() {
    return class MockComponent extends Component {
      render() {
        return <div></div>;
      }
    };
  }
};