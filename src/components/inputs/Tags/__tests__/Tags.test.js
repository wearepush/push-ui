import React from 'react';
import { shallow, mount } from 'enzyme';
import { Tags, TagsWithOutContext } from '../../index';

const testingData = [
  { id: 'USA', value: 'USA' },
  { id: 'Germany', value: 'Germany' },
  { id: 'Austria', value: 'Austria' },
  { id: 'Costa Rica', value: 'Costa Rica' },
  { id: 'Sri Lanka', value: 'Sri Lanka' },
  { id: 'Thailand', value: 'Thailand' }
];

const testingAccessorData = [
  { id: 'USA', data: 'USA' },
  { id: 'Germany', data: 'Germany' },
  { id: 'Austria', data: 'Austria' },
  { id: 'Costa Rica', data: 'Costa Rica' },
  { id: 'Sri Lanka', data: 'Sri Lanka' },
  { id: 'Thailand', data: 'Thailand' }
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
      expect(props.autofocus).toBe(true);
      expect(props.autocomplete).toBe(false);
      expect(props.allowDeleteFromEmptyInput).toBe(true);
      expect(props.activeSuggestionClassName).toBe('');
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
      expect(props.size).toBe('medium');
      expect(props.suggestions).toEqual([]);
      expect(props.suggestionsClassName).toBe('');
      expect(props.tagClassName).toBe('');
      expect(props.tagsClassName).toBe('');
      expect(props.tagInputClassName).toBe('');
      expect(props.tagInputFieldClassName).toBe('');
      expect(props.valid).toEqual(false);
      expect(props.value).toEqual(undefined);
      tags.unmount();
    });

    it('should render disabled component', () => {
      const tags = mount(
        <Tags
          defaultValue={testingData}
          disabled
        />
      );
      const input = tags.find('input');
      expect(input.length).toEqual(0);
      tags.unmount();
    });

    it('should render tags with float', () => {
      const tags = mount(
        <Tags
          defaultValue={testingData}
          float
        />
      );
      const tag = tags.find('.TagsWrapper__tag').first();
      expect(tag.hasClass('is-float')).toBe(true);
      tags.unmount();
    });

    it('should render tags with size', () => {
      const tags = mount(
        <Tags
          defaultValue={testingData}
          size="large"
        />
      );
      const tag = tags.find('.TagsWrapper__tag').first();
      expect(tag.hasClass('is-size-large')).toBe(true);
      tags.unmount();
    });

    it('should render tags with id', () => {
      const tags = mount(
        <Tags
          id="test-id"
        />
      );
      const input = tags.find('#test-id').first();
      expect(input.length).toEqual(1);
      tags.unmount();
    });

    it('should render tags with inline input', () => {
      const tags = mount(
        <Tags
          inline={false}
        />
      );
      const input = tags.find('.TagsWrapper__selected .TagsWrapper__input');
      expect(input.length).toEqual(0);
      tags.unmount();
    });

    it('should render tags accessor', () => {
      const tags = mount(
        <Tags
          accessor={{
            id: 'id',
            value: 'data'
          }}
          defaultValue={testingAccessorData}
          inline={false}
        />
      );
      const tag = tags.find('.TagsWrapper__tag');
      expect(tag.length).toEqual(testingData.length);
      tags.unmount();
    });
  });

  describe('uncontroled component', () => {
    it('should render uncontrolled component', () => {
      const tags = mount(
        <Tags
          defaultValue={testingData}
        />
      );

      const tag = tags.find('.TagsWrapper__tag');
      expect(tag.length).toEqual(testingData.length);
      tags.unmount();
    });

    it('should handle events', () => {
      const onBlurSpy = jest.fn();
      const onChangeSpy = jest.fn();
      const onFocusSpy = jest.fn();
      const tags = mount(
        <Tags
          defaultValue={testingData}
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
          onFocus={onFocusSpy}
        />
      );

      const input = tags.find('input');
      input.simulate('focus');
      expect(onFocusSpy).toHaveBeenCalledTimes(1);
      expect(onFocusSpy).toHaveBeenCalledWith(testingData);

      input.simulate('change', { target: { value: 'test-1' } });
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith('test-1', testingData);

      input.simulate('blur', { target: { value: 'test-2' } });
      expect(onBlurSpy).toHaveBeenCalledTimes(1);
      expect(onBlurSpy).toHaveBeenCalledWith('test-2', testingData);
      tags.unmount();
    });

    it('should render with custom tags', () => {
      const tags = mount(
        <Tags
          accessor={{
            id: '_id',
            value: '_name'
          }}
          defaultValue={customTags}
        />
      );
      const { state } = tags.instance();
      expect(state.tags).toEqual([{ id: 'Sri Lanka', text: 'Sri Lanka' }, { id: 'Thailand', text: 'Thailand' }]);
      tags.unmount();
    });

    it('should change drag tag', () => {
      const onDragSpy = jest.fn();
      const tags = shallow(
        <Tags
          accessor={{
            id: 'id',
            value: 'text'
          }}
          defaultValue={[
            { id: 'USA', text: 'USA' },
            { id: 'Germany', text: 'Germany' }
          ]}
          onDrag={onDragSpy}
        />
      );
      const { handleDrag } = tags.instance();
      handleDrag({ id: 'Germany', text: 'Germany' }, 1, 0);

      expect(onDragSpy).toHaveBeenCalledTimes(1);
      expect(onDragSpy).toHaveBeenCalledWith([{ id: 'Germany', text: 'Germany' }, { id: 'USA', text: 'USA' }]);
      tags.update();
      expect(tags.instance().state.tags).toEqual([{ id: 'Germany', text: 'Germany' }, { id: 'USA', text: 'USA' }]);
      tags.unmount();
    });

    it('should add new tag', () => {
      const onAddSpy = jest.fn();
      const tags = mount(
        <Tags
          defaultValue={testingData}
          onAdd={onAddSpy}
        />
      );

      const input = tags.find('input');
      input.simulate('focus');
      input.simulate('change', { target: { value: 'test-1' } });

      input.simulate('keyDown', { keyCode: 40 });
      input.simulate('keyDown', { keyCode: 13 });
      tags.update();

      expect(onAddSpy).toHaveBeenCalledTimes(1);
      expect(onAddSpy).toHaveBeenCalledWith([...testingData, { id: 'test-1', value: 'test-1' }], { id: 'test-1', value: 'test-1' });
      const tag = tags.find('.TagsWrapper__tag').last();
      expect(tag.text().indexOf('test-1')).toEqual(0);
    });

    it('should delete tag', () => {
      const onDeleteSpy = jest.fn();
      const tags = mount(
        <Tags
          accessor={{
            id: 'id',
            value: 'text'
          }}
          defaultValue={[
            { id: 'USA', text: 'USA' },
            { id: 'Germany', text: 'Germany' }
          ]}
          onDelete={onDeleteSpy}
          removeBtnClassName="removeBtnClassName"
        />
      );
      expect(tags.instance().state.tags.length).toEqual(2);
      const tagRemoveBtn = tags.find('.removeBtnClassName').last();
      tagRemoveBtn.simulate('click');

      expect(onDeleteSpy).toHaveBeenCalledTimes(1);
      expect(onDeleteSpy).toHaveBeenCalledWith([{ id: 'USA', text: 'USA' }], { id: 'Germany', text: 'Germany' });

      tags.update();
      expect(tags.instance().state.tags).toEqual([{ id: 'USA', text: 'USA' }]);
      expect(tags.instance().state.tags.length).toEqual(1);
      tags.unmount();
    });
  });

  describe('controled component', () => {
    it('should render controlled component', () => {
      const tags = mount(
        <Tags
          value={testingData}
        />
      );
      expect(tags.instance().state).toBe(null);
      const tag = tags.find('.TagsWrapper__tag');
      expect(tag.length).toEqual(testingData.length);
      tags.unmount();
    });

    it('should handle events', () => {
      const onAddSpy = jest.fn();
      const onDeleteSpy = jest.fn();
      const onBlurSpy = jest.fn();
      const onChangeSpy = jest.fn();
      const onFocusSpy = jest.fn();
      const tags = mount(
        <Tags
          onAdd={onAddSpy}
          onDelete={onDeleteSpy}
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
          onFocus={onFocusSpy}
          value={testingData}
        />
      );

      const input = tags.find('input');
      input.simulate('focus', { currentTarget: { checked: true } });
      expect(onFocusSpy).toHaveBeenCalledTimes(1);
      expect(onFocusSpy).toHaveBeenCalledWith(testingData);

      input.simulate('change', { target: { value: 'test-1' } });
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith('test-1', testingData);

      input.simulate('blur', { target: { value: 'test-2' } });
      expect(onBlurSpy).toHaveBeenCalledTimes(1);
      expect(onBlurSpy).toHaveBeenCalledWith('test-2', testingData);

      tags.unmount();
    });

    it('should change drag tag', () => {
      const onDragSpy = jest.fn();
      const tags = shallow(
        <Tags
          accessor={{
            id: 'id',
            value: 'text'
          }}
          onDrag={onDragSpy}
          value={[
            { id: 'USA', text: 'USA' },
            { id: 'Germany', text: 'Germany' }
          ]}
        />
      );
      const { handleDrag } = tags.instance();
      handleDrag({ id: 'Germany', text: 'Germany' }, 1, 0);

      expect(onDragSpy).toHaveBeenCalledTimes(1);
      expect(onDragSpy).toHaveBeenCalledWith([{ id: 'Germany', text: 'Germany' }, { id: 'USA', text: 'USA' }]);

      tags.unmount();
    });

    it('should add new tag', () => {
      const onAddSpy = jest.fn();
      const tags = mount(
        <Tags
          onAdd={onAddSpy}
          value={testingData}
        />
      );

      const input = tags.find('input');
      input.simulate('focus');
      input.simulate('change', { target: { value: 'test-1' } });

      input.simulate('keyDown', { keyCode: 40 });
      input.simulate('keyDown', { keyCode: 13 });
      tags.update();

      expect(onAddSpy).toHaveBeenCalledTimes(1);
      expect(onAddSpy).toHaveBeenCalledWith([...testingData, { id: 'test-1', value: 'test-1' }], { id: 'test-1', value: 'test-1' });
    });

    it('should delete tag', () => {
      const onDeleteSpy = jest.fn();
      const tags = mount(
        <Tags
          accessor={{
            id: 'id',
            value: 'text'
          }}
          onDelete={onDeleteSpy}
          removeBtnClassName="removeBtnClassName"
          value={[
            { id: 'USA', text: 'USA' },
            { id: 'Germany', text: 'Germany' }
          ]}
        />
      );
      const tagRemoveBtn = tags.find('.removeBtnClassName').last();
      tagRemoveBtn.simulate('click');

      expect(onDeleteSpy).toHaveBeenCalledTimes(1);
      expect(onDeleteSpy).toHaveBeenCalledWith([{ id: 'USA', text: 'USA' }], { id: 'Germany', text: 'Germany' });

      tags.unmount();
    });
  });

  describe('with out contex', () => {
    it('should render TagsWithOutContext', () => {
      const tags = mount(<TagsWithOutContext />);
      expect(tags.length).toEqual(1);
      tags.unmount();
    });
  });
});
