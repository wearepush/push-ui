import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';

export default class AccordionItem extends Component {
  static propTypes = {
    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * The accordion title.
     */
    title: PropTypes.node,

    /**
     * The description of the expando icon.
     */
    iconDescription: PropTypes.string,

    /**
     * `true` to open the expando.
     */
    open: PropTypes.bool,

    /**
     * The handler of the massaged `click` event.
     */
    onClick: PropTypes.func,

    /**
     * The handler of the massaged `click` event on the heading.
     */
    onHeadingClick: PropTypes.func,
  };

  static defaultProps = {
    title: 'title',
    iconDescription: 'Expand/Collapse',
    open: false,
    onClick: () => {},
    onHeadingClick: () => {},
  };

  state = {
    open: this.props.open,
  };

  UNSAFE_componentWillReceiveProps({ open }) {
    if (open !== this.props.open) {
      this.setState({ open });
    }
  }

  handleClick = evt => {
    this.props.onClick(evt);
  };

  handleHeadingClick = evt => {
    const open = !this.state.open;
    this.setState({ open });
    this.props.onHeadingClick({ isOpen: open, event: evt });
  };

  handleKeyPress = evt => {
    const isKeyPressTarget = evt.target === evt.currentTarget;
    const isValidKeyPress = [13, 32].indexOf(evt.which) !== -1;

    if (isKeyPressTarget && isValidKeyPress) {
      this.handleHeadingClick(evt);
    }
  };

  render() {
    const {
      className,
      title,
      iconDescription, // eslint-disable-line 
      children,
      onClick, // eslint-disable-line no-unused-vars
      onHeadingClick, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;
    const classNames = classnames(
      {
        'Accordion__item--active': this.state.open,
      },
      'Accordion__item',
      className
    );
    return (
      <div
        key={Math.random(100)}
        className={classNames}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        role="presentation"
        {...other}>
        <button
          type="button"
          className="Accordion__heading"
          role="tab"
          onClick={this.handleHeadingClick}>
          <p className="Accordion__title">{title}</p>
        </button>
        <div className="Accordion__content">{children}</div>
      </div>
    );
  }
}