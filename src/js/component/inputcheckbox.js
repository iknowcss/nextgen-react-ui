import React, {Component} from 'react/addons';

import classnames from 'classnames';

export default class InputCheckbox extends Component {


    render() {
        let className = classnames('inputcheckbox', this.props.style);

        return (
            <span
                className={className}
            ></span>
        );
    }
}

/*
<span class="inputcheckbox {{style}}">
  <input id="{{elementId}}" name="{{name}}" type="checkbox" value="{{value}}" {{#if describe}}aria-describedby="{{describe}}"{{/if}}>
  <label for="{{elementId}}">
    {{#if view_parent_html}}
      {{{htmlRender this null viewParent.html}}}
    {{/if}}
    {{#if html}}
      {{{htmlRender this null html}}}
    {{else}}
      {{label}}
    {{/if}}
  </label>
</span>

 */