import React, {Component, PropType} from 'react/addons';

export default class DemoLoader extends Component {
  constructor(...args) {
    super(...args);
    this.demos = [
      'inputselect',
      'inputtext'
    ];
    this.setDemo(this.demos[0]);
  }

  setDemo(demoName) {
    const newState = {
      currentDemo: demoName,
      currentProps: defaultProps[demoName]
    };
    if (this.state) {
      this.setState(newState);
    } else {
      this.state = newState;
    }
  }

  demoChanged(event) {
    this.setDemo(event.target.value);
  }

  renderCurrentDemo() {
    const currentDemo = this.state.currentDemo;
    if (!currentDemo) return null;
    let Demo = require(`../component/${currentDemo}`);
    return <Demo {...this.state.currentProps}/>
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

const defaultProps = {
  inputselect: {
    name: 'phone',
    placeholder: 'Select',
    options: [
      { value: 'A', label: 'Alpha' },
      { value: 'B', label: 'Bravo' },
      { value: 'C', label: 'Charlie' },
      { value: 'D', label: 'Delta' }
    ]
  },
  inputtext: {

  }
};