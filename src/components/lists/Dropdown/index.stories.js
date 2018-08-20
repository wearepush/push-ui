/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Dropdown from './Dropdown';
import Button from '../../buttons/Button/Button';

class ControlledDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.buttonRef = React.createRef();
    this.drop = React.createRef();
  }

  componentDidMount() {
    document.body.addEventListener('click', this.changeState);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.changeState);
  }

  changeState = (e) => {
    const { isOpen } = this.state;
    const $target = e.target;
    const container = ReactDOM.findDOMNode(this.drop);
    const btn = ReactDOM.findDOMNode(this.buttonRef);
    if (
      $target !== container &&
      $target !== btn &&
      container && !container.contains($target) &&
      isOpen) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div>
        <Button ref={c => { this.buttonRef = c }} onClick={() => this.setState({ isOpen: !this.state.isOpen })}>Click</Button>
        <Dropdown
          ref={c => { this.drop = c }}
          button="My Settings"
          isOpen={this.state.isOpen}
        >
          <span>1</span>
        </Dropdown>
      </div>
    );
  }
}

export default ControlledDropdown;



storiesOf('lists/Dropdown', module)
  .addDecorator(withInfo)
  .add('size', () =>
    <Dropdown
      button="My Settings"
    >
      <span>1</span>
    </Dropdown>
  )
  .add('controlled', () =>
    <ControlledDropdown />
  )
  .add('is open', () =>
    <Dropdown
      isOpen
      button="My Settings"
    >
      <span>1</span>
    </Dropdown>
  )
  .add('isSelfClosing', () =>
    <Dropdown
      isSelfClosed
      button="My Settings"
    >
      <span>1</span>
    </Dropdown>
  );
