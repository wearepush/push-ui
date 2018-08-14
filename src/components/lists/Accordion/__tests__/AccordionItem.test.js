import React from 'react';
import AccordionItem from '../AccordionItem';
import { shallow, mount } from 'enzyme';

describe('AccordionItem', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <AccordionItem title="A heading" className="extra-class">
        Lorem ipsum.
      </AccordionItem>
    );

    it('renders children as expected', () => {
      expect(wrapper.find('.Accordion__content').text()).toBe(
        'Lorem ipsum.'
      );
    });

    it('renders heading as expected', () => {
      const heading = wrapper.find('.Accordion__heading');
      expect(heading.length).toBe(1);
      expect(heading.find('.Accordion__title').text()).toBe('A heading');
    });


    it('has the expected classes', () => {
      expect(wrapper.hasClass('Accordion__item')).toEqual(true);
      expect(wrapper.hasClass('Accordion__item--active')).toEqual(false);
    });

    it('renders extra classes passed in via className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });

    it('can be open by default', () => {
      const openItem = shallow(
        <AccordionItem title="A heading" open>
          Lorem ipsum.
        </AccordionItem>
      );
      expect(openItem.hasClass('Accordion__item--active')).toEqual(true);
      expect(openItem.state().open).toEqual(true);
    });

    it('should apply the active class when the state is open', () => {
      const toggler = mount(<AccordionItem />);
      const item = toggler.find('.Accordion__item').last();
      expect(item.hasClass('Accordion__item--active')).toEqual(false);
      toggler.setState({ open: true });
      expect(
        toggler.find('.Accordion__item').hasClass('Accordion__item--active')
      ).toEqual(true);
    });

    it('should update state when receive new props', () => {
      const toggler = mount(<AccordionItem />);
      toggler.setProps({ open: true });

      expect(toggler.instance().state.open).toEqual(true);
    });

    it('should update state when receive new props', () => {
      const toggler = mount(<AccordionItem />);
      toggler.setProps({ open: false });

      expect(toggler.instance().state.open).toEqual(false);
    });
  });

  describe('Renders a node title as expected', () => {
    const titleNode = shallow(
      <h2 className="TitleClass" key="test">
        <img src="some_image.png" alt="Something" />
        A heading
      </h2>
    );
    const wrapper = shallow(
      <AccordionItem title={titleNode} className="extra-class">
        Lorem ipsum.
      </AccordionItem>
    );

    it('renders heading as expected', () => {
      const heading = wrapper.find('.Accordion__heading');
      expect(heading.length).toBe(1);
      const title = heading.find('.Accordion__title');
      expect(title.text()).toBe('A heading');
      expect(title.find('h2').exists()).toEqual(true);
      expect(title.find('h2').hasClass('TitleClass')).toEqual(true);
      expect(title.find('img').exists()).toEqual(true);
      expect(title.find('img').props()).toEqual({
        alt: 'Something',
        src: 'some_image.png',
      });
    });
  });

  describe('Check that functions passed in as props are called', () => {
    const onClick = jest.fn();
    const onHeadingClick = jest.fn();
    const wrapper = mount(
      <AccordionItem onClick={onClick} onHeadingClick={onHeadingClick} />
    );
    const heading = wrapper.find('.Accordion__heading');

    it('should call onClick', () => {
      wrapper.simulate('click');
      expect(onClick).toBeCalled();
    });

    it('should call onHeadingClick', () => {
      heading.simulate('click');
      expect(onHeadingClick).toBeCalled();
    });
  });

  describe('Check that clicking the item toggles its open state', () => {
    const toggler = mount(
      <AccordionItem title="A heading">Lorem ipsum.</AccordionItem>
    );
    const heading = toggler.find('.Accordion__heading');

    it('should set state to open when clicked', () => {
      expect(toggler.state().open).toEqual(false);
      heading.simulate('click');
      expect(toggler.state().open).toEqual(true);
    });
  });

  describe('Check that the keyboard toggles its open state', () => {
    let toggler;

    beforeEach(() => {
      toggler = mount(
        <AccordionItem title="A heading">
          Lorem ipsum.
          <input className="testInput" />
        </AccordionItem>
      );
    });

    it('should toggle state when using enter or space', () => {
      expect(toggler.state().open).toEqual(false);
      toggler.simulate('keypress', { which: 32 });
      expect(toggler.state().open).toEqual(true);
      toggler.simulate('keypress', { which: 13 });
      expect(toggler.state().open).toEqual(false);
      toggler.simulate('keypress', { which: 97 });
      expect(toggler.state().open).toEqual(false);
    });

    it('should not toggle if a keypress is made in a child element', () => {
      const input = toggler.find('.testInput');
      expect(toggler.state().open).toEqual(false);
      toggler.simulate('keypress', { which: 32 });
      expect(toggler.state().open).toEqual(true);
      input.simulate('keypress', { which: 32 });
      expect(toggler.state().open).toEqual(true);
    });
  });
});
