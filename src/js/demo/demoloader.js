import React, {Component, PropType} from 'react/addons';

export default class DemoLoader extends Component {
  constructor(...args) {
    super(...args);
    this.demos = [
      'inputselect',
      'inputtext'
    ];
    this.state = {};
  }

  setDemo(demo) {
    this.setState({ currentDemo: demo });
  }

  renderCurrentDemo() {
    if (!this.state.currentDemo) return null;
    let Demo = require('./' + this.state.currentDemo);
    return <Demo/>
  }

  render() {
    return (
      <table><tr>
        <td><ul>
          {this.demos.map(demo => <li>
            <a href="#" onClick={() => this.setDemo(demo)}>{demo}</a>
          </li>)}
        </ul></td>
        <td>
          {this.renderCurrentDemo()}
        </td>
      </tr></table>
    );
  }
}

DemoLoader.propTypes = {

};