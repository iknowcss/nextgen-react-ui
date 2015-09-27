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
      currentProps: defaultProps[demoName],
      currentPropsJson: JSON.stringify(defaultProps[demoName], ' ', 2)
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

  applyProps() {
    let currentProps;
    try {
      currentProps = JSON.parse(this.state.currentPropsJson);
    } catch (e) {
      alert('Could not parse JSON!', e);
      return;
    }
    this.setState({ currentProps });
  }

  updateCurrentPropsJson(event) {
    this.setState({ currentPropsJson: event.target.value });
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

        <div>
          <h2>Props</h2>
          <textarea
            cols="50"
            rows="10"
            ref="propTextarea"
            value={this.state.currentPropsJson}
            onChange={this.updateCurrentPropsJson.bind(this)}
          />
          <div>
            <button onClick={this.applyProps.bind(this)}>Apply props</button>
          </div>
        </div>

        <h1>{this.state.currentDemo}</h1>
        <hr/>

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