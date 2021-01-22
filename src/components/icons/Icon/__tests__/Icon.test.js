/* eslint-disable prefer-destructuring */
import React from 'react';
import { shallow } from 'enzyme';
import { IconComponent as Icon } from '../Icon';

describe('Icon', () => {
  it('should render null', () => {
    const spy = jest.spyOn(global.console, 'error');
    const icon = shallow(<Icon />);
    expect(icon).toEqual({});
    expect(spy).toHaveBeenCalled();
  });

  it('should render icon', () => {
    const icon = shallow(<Icon name="test" />);
    expect(icon.find('.Icon').length).toEqual(1);
  });

  it('should render with name prop', () => {
    const icon = shallow(<Icon name="test" />);
    expect(icon.find('.Icon-test').length).toEqual(1);
  });

  it('should render with className prop', () => {
    const icon = shallow(<Icon name="test" className="test" />);
    expect(icon.hasClass('test')).toBe(true);
  });

  it('should render fill prop', () => {
    const icon = shallow(<Icon name="test" fill="#f00" />);
    expect(icon.props().fill).toBe('#f00');
  });

  it('should render height prop', () => {
    const icon = shallow(<Icon name="test" height="10" />);
    expect(icon.props().height).toBe('10');
  });

  it('should render width prop', () => {
    const icon = shallow(<Icon name="test" width="10" />);
    expect(icon.props().width).toBe('10');
  });

  it('should render viewBox prop', () => {
    const icon = shallow(<Icon name="test" viewBox="0 0 24 24" />);
    expect(icon.props().viewBox).toBe('0 0 24 24');
  });

  it('should render preserveAspectRatio prop', () => {
    const icon = shallow(<Icon name="test" preserveAspectRatio="xMidYMid slice" />);
    expect(icon.props().preserveAspectRatio).toBe('xMidYMid slice');
  });

});
