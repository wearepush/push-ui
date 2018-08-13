import React from 'react';
import { shallow, mount } from 'enzyme';
import { Tags } from '../../index.js';

const testingData = [
  { id: 'USA', text: 'USA' },
  { id: 'Germany', text: 'Germany' },
  { id: 'Austria', text: 'Austria' },
  { id: 'Costa Rica', text: 'Costa Rica' },
  { id: 'Sri Lanka', text: 'Sri Lanka' },
  { id: 'Thailand', text: 'Thailand' }
];

const customTags = [
  { _id: 'Sri Lanka', _name: 'Sri Lanka' },
  { _id: 'Thailand', _name: 'Thailand' }
];

describe('Tags', () => {
  describe('default props', () => {
    it('should render with default prop', () => {
      const tags = shallow(
        <Tags />
      );
      const { props } = tags.instance();
      expect(props.accessor).toEqual({
        id: 'id', value: 'value'
      });
      expect(props.activeSuggestionClassName).toBe('');
      expect(props.defaultValue).toEqual([]);
      expect(props.handleAddition).toEqual(undefined);
      expect(props.handleBlur).toEqual(undefined);
      expect(props.handleChange).toEqual(undefined);
      expect(props.handleDrag).toEqual(undefined);
      expect(props.handleFocus).toEqual(undefined);

      expect(props.defaultValue).toEqual([]);
      expect(props.disabled).toBe(false);
      expect(props.id).toBe(undefined);
      expect(props.inline).toBe(true);
      expect(props.invalid).toBe(false);
      expect(props.float).toBe(false);
      expect(props.minQueryLength).toEqual(2);
      expect(props.name).toBe('');
      expect(props.onAdd).toBe(undefined);
      expect(props.onBlur).toBe(undefined);
      expect(props.onDrag).toBe(undefined);
      expect(props.onChange).toBe(undefined);
      expect(props.onDelete).toBe(undefined);
      expect(props.onFocus).toBe(undefined);
      expect(props.placeholder).toBe('');



      expect(props.removeBtnClassName).toBe('');
      expect(props.selectedClassName).toBe('');
      expect(props.suggestionsClassName).toBe('');
      expect(props.tagClassName).toBe('');
      expect(props.tagsClassName).toBe('');
      expect(props.tagInputClassName).toBe('');
      expect(props.tagInputFieldClassName).toBe('');
      expect(props.value).toEqual(undefined);
      tags.unmount();
    });
  });

  // describe('uncontroled component', () => {
  //   it('should render uncontrolled component', () => {
  //     const onAddSpy = jest.fn();
  //     const onBlurSpy = jest.fn();
  //     const onChangeSpy = jest.fn();
  //     const onFocusSpy = jest.fn();
  //     const tags = mount(
  //       <Tags
  //         defaultValue={testingData}
  //         onAdd={onAddSpy}
  //         onBlur={onBlurSpy}
  //         onChange={onChangeSpy}
  //         onFocus={onFocusSpy}
  //         accessor={{
  //           id: 'id',
  //           value: 'text'
  //         }}
  //       />
  //     );
  //     const { handleAddition, state } = tags.instance();
  //     const input = tags.find('input');
  //     input.simulate('blur');
  //     expect(onBlurSpy).toHaveBeenCalledTimes(1);
  //     input.simulate('change');
  //     expect(onChangeSpy).toHaveBeenCalledTimes(1);
  //     input.simulate('focus');
  //     expect(onFocusSpy).toHaveBeenCalledTimes(1);
  //     expect(state.tags.length).toEqual(0);
  //     handleAddition({ id: 'trololo', text: 'trololo' });
  //     expect(onAddSpy).toHaveBeenCalledTimes(1);
  //     tags.update();
  //     expect(tags.instance().state.tags.length).toEqual(1);
  //     tags.unmount();
  //   });

  //   it('should render with custom tags', () => {
  //     const tags = mount(
  //       <Tags
  //         tags={customTags}
  //         accessor={{
  //           id: '_id',
  //           value: '_name'
  //         }}
  //       />
  //     );
  //     const { state } = tags.instance();
  //     expect(state.tags).toEqual([{ id: 'Sri Lanka', text: 'Sri Lanka' }, { id: 'Thailand', text: 'Thailand' }]);
  //     tags.unmount();
  //   });

  //   it('should render uncontrolled read-only component', () => {
  //     const isTrue = true;
  //     const tags = mount(
  //       <Tags
  //         readOnly={isTrue}
  //         defaultValue={testingData}
  //         accessor={{
  //           id: 'id',
  //           value: 'text'
  //         }}
  //       />
  //     );
  //     const input = tags.find('input');
  //     expect(input.length).toEqual(0);
  //     tags.unmount();
  //   });

  //   it('should change tag pos', () => {
  //     const tags = shallow(
  //       <Tags
  //         accessor={{
  //           id: 'id',
  //           value: 'text'
  //         }}
  //         tags={[
  //           { id: 'USA', text: 'USA' },
  //           { id: 'Germany', text: 'Germany' }
  //         ]}
  //       />
  //     );
  //     const { handleDrag } = tags.instance();
  //     handleDrag({ id: 'Germany', text: 'Germany' }, 1, 0);
  //     tags.update();
  //     expect(tags.instance().state.tags).toEqual([{ id: 'Germany', text: 'Germany' }, { id: 'USA', text: 'USA' }]);
  //     tags.unmount();
  //   });

  //   it('should add new tag', () => {
  //     const tags = mount(
  //       <Tags
  //         accessor={{
  //           id: 'id',
  //           value: 'text'
  //         }}
  //         tags={[]}
  //         defaultValue={testingData}
  //       />
  //     );
  //     const { state } = tags.instance();
  //     expect(state.tags.length).toBe(0);
  //     const input = tags.find('input');
  //     input.simulate('change', { target: { value: 'USA' } });
  //     input.simulate('keyDown', { keyCode: 40 });
  //     input.simulate('keyDown', { keyCode: 13 });
  //     tags.update();
  //     expect(tags.instance().state.tags.length).toBe(1);
  //   });

  //   it('should delete tag on click to remove btn', () => {
  //     const tags = mount(
  //       <Tags
  //         removeBtnClassName="removeBtnClassName"
  //         accessor={{
  //           id: 'id',
  //           value: 'text'
  //         }}
  //         tags={[
  //           { id: 'USA', text: 'USA' },
  //           { id: 'Germany', text: 'Germany' }
  //         ]}
  //       />
  //     );
  //     expect(tags.instance().state.tags.length).toEqual(2);
  //     const tagRemoveBtn = tags.find('.removeBtnClassName').last();
  //     tagRemoveBtn.simulate('click');
  //     tags.update();
  //     expect(tags.instance().state.tags.length).toEqual(1);
  //     tags.unmount();
  //   });
  // });

  // describe('controled component', () => {
  //   it('should render controled component', () => {
  //     const onBlurSpy = jest.fn();
  //     const onChangeSpy = jest.fn();
  //     const onFocusSpy = jest.fn();
  //     const onDeleteSpy = jest.fn();
  //     const tags = mount(
  //       <Tags
  //         accessor={{
  //           id: 'id',
  //           value: 'text'
  //         }}
  //         onBlur={onBlurSpy}
  //         onChange={onChangeSpy}
  //         onDelete={onDeleteSpy}
  //         onFocus={onFocusSpy}
  //         tags={[
  //           { id: 'Sri Lanka', text: 'Sri Lanka' },
  //           { id: 'Thailand', text: 'Thailand' }
  //         ]}
  //         removeBtnClassName="removeBtnClassName"
  //         tagClassName="tagClassName"
  //         value={testingData}
  //       />
  //     );
  //     const { props, state } = tags.instance();
  //     expect(state).toEqual(null);
  //     const input = tags.find('input');
  //     const tagRemoveBtn = tags.find('.removeBtnClassName').last();
  //     input.simulate('focus');
  //     expect(onFocusSpy).toHaveBeenCalledTimes(1);
  //     expect(onFocusSpy).toHaveBeenLastCalledWith('', [
  //       { id: 'Sri Lanka', text: 'Sri Lanka' },
  //       { id: 'Thailand', text: 'Thailand' }
  //     ]);
  //     input.simulate('blur');
  //     expect(onBlurSpy).toHaveBeenCalledTimes(1);
  //     expect(onBlurSpy).toHaveBeenLastCalledWith('', [
  //       { id: 'Sri Lanka', text: 'Sri Lanka' },
  //       { id: 'Thailand', text: 'Thailand' }
  //     ]);
  //     input.simulate('change');
  //     expect(onChangeSpy).toHaveBeenCalledTimes(1);
  //     expect(onChangeSpy).toHaveBeenLastCalledWith('', [
  //       { id: 'Sri Lanka', text: 'Sri Lanka' },
  //       { id: 'Thailand', text: 'Thailand' }
  //     ]);
  //     expect(props.tags.length).toEqual(2);
  //     tagRemoveBtn.simulate('click');
  //     expect(onDeleteSpy).toHaveBeenCalledTimes(1);
  //     expect(onDeleteSpy).toHaveBeenLastCalledWith(
  //       [{ id: 'Sri Lanka', text: 'Sri Lanka' }],
  //       { id: 'Thailand', text: 'Thailand' });
  //     tags.unmount();
  //   });
  // });
});
