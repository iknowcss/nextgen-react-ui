import React, {Component, PropType} from 'react/addons';

export default class DemoLoader extends Component {
  constructor(...args) {
    super(...args);
    this.demos = [
      'inputselect',
      'inputtext'
    ];
    this.state = {
      currentDemo: this.demos[0]
    };
  }

  demoChanged(event) {
    this.setState({ currentDemo: event.target.value });
  }

  renderCurrentDemo() {
    if (!this.state.currentDemo) return null;
    let Demo = require('./' + this.state.currentDemo);
    return <Demo/>
  }

  render() {
    return (
      <div>
        <label htmlFor="demo-select">Pick a Demo: &nbsp;</label>
        <select id="demo-select" value={this.state.currentDemo} onChange={this.demoChanged.bind(this)}>
          {this.demos.map((demo, i) =>
            <option value={demo} key={i}>{demo}</option>
          )}
        </select>
        <hr/>
        <h1>{this.state.currentDemo}</h1>
        <div>
          {this.renderCurrentDemo()}
        </div>
      </div>
    );
  }
}

DemoLoader.propTypes = {

};