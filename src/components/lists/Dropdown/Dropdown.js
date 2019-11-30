import React, { Component } from 'react';
import ReactDOM from 'react-dom'; // eslint-disable-line
import { bool, node, number, string, oneOf, oneOfType, arrayOf } from 'prop-types';
import cx from 'classnames';
import { } from './Dropdown.scss';

export const DropdownButton = ({
  className: classNameProp,
  isOpen,
  text,
  size,
}) => {
  const className = cx('Dropdown__default_button', {
    [classNameProp]: !!classNameProp,
    [`is-size-${size}`]: !!size,
    'is-open': isOpen,
  });

  return (
    <div
      className={className}
    >
      {text}
    </div>
  );
};

DropdownButton.propTypes = {
  className: string,
  isOpen: bool,
  text: string.isRequired,
  size: oneOf([
    'small',
    'medium',
    'large'
  ]),
};

DropdownButton.defaultProps = {
  className: '',
  isOpen: false,
  size: 'medium',
};

export default class Dropdown extends Component {
  static propTypes = {
    /**
    * The childrens or a child for the dropdown list.
    */
    children: oneOfType([
      arrayOf(node),
      node
    ]),
    /**
    * @ignore
    */
    className: string,
    /**
    * The additional class name for button.
    */
    classNameButton: string,
    /**
    * The additional class name for default button.
    */
    classNameDefaultButton: string,
    /**
    * The additional class names setup list position.
    */
    dropPosition: oneOf([
      'bl',
      'br',
      'tl',
      'tr'
    ]),
    /**
     * The additional class name for dropdown list.
     */
    dropListClassName: string,
    /**
     * The flag for self close after clicked on menu item
     */
    isSelfClosed: bool,
    /**
     * The flag for the controlled dropdown.
     * If isOpen is true the dropdown list will be open and
     * component will be controlled
     */
    isOpen: bool,
    /**
    * @ignore
    */
    tabIndex: oneOfType([number, string]),
    /**
    * The size of the button.
    */
    size: oneOf([
      'small',
      'medium',
      'large'
    ]),
    /**
    * type of relay to open drop
    */
    trigger: oneOf([
      'hover',
      'click'
    ]),
    /**
    * The node for control list's visibility.
    */
    button: oneOfType([
      node,
      string
    ]).isRequired,
  };

  static defaultProps = {
    children: undefined,
    className: '',
    classNameButton: '',
    dropListClassName: '',
    classNameDefaultButton: '',
    dropPosition: 'bl',
    isOpen: undefined,
    isSelfClosed: false,
    tabIndex: null,
    trigger: 'click',
    size: 'medium',
  };

  constructor(props) {
    super(props);
    this.isControlled = props.isOpen !== undefined;
    this.isHoverTrigger = props.trigger === 'hover';
    if (!this.isControlled) {
      this.state = {
        isOpen: props.isOpen !== undefined ? props.isOpen : false
      };
    }
  }

  componentDidMount() {
    if (this.isControlled || this.isHoverTrigger) return;
    document.body.addEventListener('click', this.changeMenuHandler);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.isControlled || this.isHoverTrigger) return;
    this.setState({
      isOpen: nextProps.isOpen
    });
  }

  componentWillUnmount() {
    if (this.isControlled || this.isHoverTrigger) return;
    document.body.removeEventListener('click', this.changeMenuHandler);
  }

  changeMenuHandler = (e) => {
    if (this.isControlled) return;
    const { isSelfClosed } = this.props;
    const { isOpen } = this.state;
    const $target = e.target;
    const container = ReactDOM.findDOMNode(this.containerRef); // eslint-disable-line
    if (isSelfClosed && isOpen) {
      this.setState({ isOpen: false });
    } else if ($target !== container && container && !container.contains($target) && isOpen) {
      this.setState({ isOpen: false });
    }
  }

  clickButtonHandler = () => {
    if (this.isControlled || this.isHoverTrigger) return;
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  hoverButtonEnterHandler = () => {
    if (this.isControlled || !this.isHoverTrigger || this.state.isOpen) return;
    this.setState({
      isOpen: true
    });
  }

  hoverButtonLeaveHandler = () => {
    if (this.isControlled || !this.isHoverTrigger || !this.state.isOpen) return;
    this.setState({
      isOpen: false
    });
  }

  selfClosedHandler = () => {
    if (this.props.isSelfClosed && this.state.isOpen) {
      this.setState({
        isOpen: false
      });
    }
  }

  renderDrop = () => {
    const isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;
    const { children, dropPosition, dropListClassName } = this.props;
    if (!children || !isOpen) return null;
    return (
      <div
        className={
          cx('Dropdown__list', {
            'is-open': isOpen,
            [`is-${dropPosition}`]: !!dropPosition,
            [dropListClassName]: !!dropListClassName,
          })
        }
        role="list"
        onClick={this.selfClosedHandler}
      >
        {
          React.Children.map(children, (child, i) => (
            <div
              className="Dropdown__item"
              key={i.toString()}
              role="listitem"
            >
              {child}
            </div>
          ))
        }
      </div>);
  }

  renderButton = () => {
    const { button, size } = this.props;
    if (typeof button === 'object') {
      return button;
    } else {
      return (
        <DropdownButton
          className={this.props.classNameDefaultButton}
          isOpen={this.isControlled ? this.props.isOpen : this.state.isOpen}
          size={size}
          text={button}
        />
      );
    }
  }

  render() {
    const isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;
    const {
      className: classNameProp,
      classNameButton: classNameButtonProp,
      tabIndex,
    } = this.props;

    const className = cx('Dropdown', {
      [classNameProp]: !!classNameProp,
      'is-open': isOpen,
    });

    const classNameButton = cx('Dropdown__button', {
      [classNameButtonProp]: !!classNameButtonProp,
      'is-open': isOpen,
    });

    return (
      <div
        ref={c => this.containerRef = c}
        className={className}
        onMouseLeave={this.hoverButtonLeaveHandler}
      >
        <div
          role="button"
          tabIndex={isOpen ? -1 : tabIndex || 0}
          onClick={this.clickButtonHandler}
          onMouseEnter={this.hoverButtonEnterHandler}
          className={classNameButton}
        >
          {this.renderButton()}
        </div>
        {this.renderDrop()}
      </div>
    );
  }
}
