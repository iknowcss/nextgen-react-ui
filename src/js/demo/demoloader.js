import React, {Component, PropType} from 'react/addons';

// Load the demo data
const DEMOS = [
  'inputselect',
  'inputtext'
].map(demoName => ({
  name: demoName,
  props: require(`./${demoName}.js`)
}));

export default class DemoLoader extends Component {
  constructor(...args) {
    super(...args);
    this.setDemo(DEMOS[0]);
  }

  setDemo(demo) {
    const newState = {
      currentDemo: demo.name,
      currentProps: demo.props,
      currentPropsJson: JSON.stringify(demo.props, ' ', 2)
    };
    if (this.state) {
      this.setState(newState);
    } else {
      this.state = newState;
    }
  }

  demoChanged(event) {
    const demoName = event.target.value;
    for (let i in DEMOS) {
      if (DEMOS[i].name === demoName) {
        this.setDemo(DEMOS[i]);
        break;
      }
    }
  }

  updateCurrentPropsJson(event) {
    const newState = { currentPropsJson: event.target.value };
    try {
      newState.currentProps = JSON.parse(newState.currentPropsJson);
      newState.jsonError = false;
    } catch (e) {
      newState.jsonError = true;
    }
    this.setState(newState);
  }

  renderCurrentDemo() {
    const currentDemo = this.state.currentDemo;
    if (!currentDemo) return null;
    let Demo = require(`../component/${currentDemo}`);
    return <Demo {...this.state.currentProps}/>
  }

  render() {
    const rendered = this.renderCurrentDemo();

    return (
      <div>
        <label htmlFor="demo-select">Pick a Demo: &nbsp;</label>
        <select id="demo-select" value={this.state.currentDemo} onChange={this.demoChanged.bind(this)}>
          {DEMOS.map((demo, i) =>
            <option value={demo.name} key={i}>{demo.name}</option>
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
            style={{
              'color': this.state.jsonError ? 'red' : null
            }}
          />
        </div>

        <h1>{this.state.currentDemo}</h1>
        <hr/>

        <table width="100%">
          <tr>
            <th>Output</th>
            <th>HTML</th>
          </tr>
          <tr>
            <td width="50%">{rendered}</td>
            <td width="50%">{React.renderToString(rendered)}</td>
          </tr>
        </table>
      </div>
    );
  }
}

DemoLoader.propTypes = {

};