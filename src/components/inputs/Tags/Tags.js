import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { array, bool, func, number, object, oneOf, string } from 'prop-types';
import cx from 'classnames';
import { } from './Tags.scss';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class Tags extends Component {
  static propTypes = {
    /**
    * Pattern of array values's keys
    */
    accessor: object,
    /**
    * Boolean value to control whether the
    * text-input should be autofocused on mount
    */
    autofocus: bool,
    /**
    *  Ensure the first matching suggestion is automatically
    * converted to a tag when a delimiter key is pressed
    */
    autocomplete: bool,
    /**
    * Boolean value to control whether tags should
    * be deleted when the 'Delete' key is pressed in an empty Input Box
    */
    allowDeleteFromEmptyInput: bool,
    /**
    * Active suggestion class name
    */
    activeSuggestionClassName: string,
    /**
    * Default array of values in uncontroled component
    */
    defaultValue: array,
    /**
    * Disable input
    */
    disabled: bool,
    /**
    *  The id attribute added to the input
    */
    id: string,
    /**
    * If `false`, the input will be under list of tags.
    */
    inline: bool,
    /**
    * If `true`, the component is invalid.
    */
    invalid: bool,
    /**
    * If `true`, the base button will be rounded.
    */
    float: bool,
    /**
    * How many characters are needed for suggestions to appear
    */
    minQueryLength: number,
    /**
    * Input name
    */
    name: string,
    /**
    * Callback fired when a new tag was added.
    */
    onAdd: func,
    /**
     * Callback fired when the input was blured.
     */
    onBlur: func,
    /**
    * Callbal fired when the tag is moved by drag
    */
    onDrag: func,
    /**
     * Callback fired when the input was blured
     */
    onChange: func,
    /**
    * Callback fired when some of a tag was deleted
    */
    onDelete: func,
    /**
    * Callback fired when the input is in focus
    */
    onFocus: func,
    /**
    * Placeholder for autocomlpate field
    */
    placeholder: string,
    /**
    * Remove's button className
    */
    removeBtnClassName: string,
    /**
    * @ignore
    */
    selectedClassName: string,
    /**
    * The size of the button.
    */
    size: oneOf([
      'small',
      'medium',
      'large'
    ]),
    /**
    * Array of exists tags
    */
    suggestions: array,
    /**
    * Suggestion className
    */
    suggestionsClassName: string,
    /**
    * Tag className
    */
    tagClassName: string,
    /**
    * Tags className
    */
    tagsClassName: string,
    /**
    * Tag input className
    */
    tagInputClassName: string,
    /**
    * Tag input field className
    */
    tagInputFieldClassName: string,
    /**
    * If `true`, the component is invalid.
    */
    valid: bool,
    /**
    * Array of values in controled component
    */
    value: array,
  };

  static defaultProps = {
    accessor: {
      id: 'id',
      value: 'value'
    },
    autofocus: true,
    autocomplete: false,
    allowDeleteFromEmptyInput: true,
    activeSuggestionClassName: '',
    defaultValue: [],
    disabled: false,
    id: undefined,
    inline: true,
    invalid: false,
    float: false,
    minQueryLength: 2,
    name: '',
    onAdd: undefined,
    onBlur: undefined,
    onDrag: undefined,
    onChange: undefined,
    onDelete: undefined,
    onFocus: undefined,
    placeholder: '',
    removeBtnClassName: '',
    selectedClassName: '',
    size: 'medium',
    suggestions: [],
    suggestionsClassName: '',
    tagClassName: '',
    tagsClassName: '',
    tagInputClassName: '',
    tagInputFieldClassName: '',
    valid: false,
    value: undefined,
  };

  constructor(props) {
    super(props);
    this.isControled = props.value !== undefined;
    if (!this.isControled) {
      this.state = {
        tags: this.handleAccessor(props.defaultValue),
        suggestions: this.handleAccessor(props.suggestions)
      };
    }
  }

  handleAccessor = (obj) => {
    const { accessor } = this.props;
    const { id, value } = accessor;

    let result = [];
    if (obj && obj.length > 0) {
      result = obj.map((el, i) => ({
        id: obj[i][id],
        text: obj[i][value]
      }));
    }
    return result;
  }

  parseValue = (value) => {
    const { accessor } = this.props;
    return {
      [accessor.id]: value.id,
      [accessor.value]: value.text,
    };
  }

  getValue = () => {
    return this.isControled ? this.props.value : this.state.tags;
  }

  handleAddition = (value) => {
    const { onAdd } = this.props;
    const tag = this.parseValue(value);
    const currentTags = this.getValue();
    const tags = [...currentTags, tag];
    if (!this.isControled) {
      this.setState({ tags });
    }
    onAdd && onAdd(tags, tag);
  }

  handleDelete = (i) => {
    if (this.props.disabled) return;
    const { onDelete } = this.props;
    const currentTags = this.getValue();
    const tags = currentTags.filter((tag, index) => index !== i);
    if (!this.isControled) this.setState({ tags });
    onDelete && onDelete(tags, currentTags[i]);
  }

  handleDrag = (value, currPos, newPos) => {
    if (this.props.disabled) return;
    const { onDrag } = this.props;
    const currentTags = this.getValue();
    const newTags = currentTags.slice();
    const tag = this.parseValue(value);
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    if (!this.isControled) {
      this.setState({ tags: newTags });
    }
    onDrag && onDrag(newTags);
  }

  handleInputBlur = (event) => {
    const { onBlur } = this.props;
    const currentTags = this.getValue();
    onBlur && onBlur(event, currentTags);
  }

  handleInputChange = (event) => {
    const { onChange } = this.props;
    const currentTags = this.getValue();
    onChange && onChange(event, currentTags);
  }

  handleInputFocus = (event) => {
    const { onFocus } = this.props;
    const currentTags = this.getValue();
    onFocus && onFocus(event, currentTags);
  }

  render() {
    let tags = [];
    let suggestions = [];
    if (this.isControled) {
      tags = this.handleAccessor(this.props.value);
      suggestions = this.handleAccessor(this.props.suggestions);
    } else {
      tags = this.state.tags;
      suggestions = this.state.suggestions;
    }

    const {
      autofocus,
      autocomplete,
      allowDeleteFromEmptyInput,
      activeSuggestionClassName,
      disabled,
      id,
      inline,
      invalid,
      float,
      minQueryLength,
      name,
      placeholder,
      removeBtnClassName,
      size,
      selectedClassName,
      suggestionsClassName,
      tagClassName,
      tagsClassName,
      tagInputClassName,
      tagInputFieldClassName,
      valid,
    } = this.props;

    const classNames = {
      tag: cx("TagsWrapper__tag", {
        tagClassName: !!tagClassName,
        'is-disabled': disabled,
        [`is-size-${size}`]: !!size,
        'is-float': !!float,
      }),
      tags: cx("TagsWrapper__tags", {
        tagsClassName: !!tagsClassName,
        'is-disabled': disabled
      }),
      tagInput: cx("TagsWrapper__input", {
        tagInputClassName: !!tagInputClassName
      }),
      tagInputField: cx("TagsWrapper__input_field",
        {
          tagInputFieldClassName: !!tagInputFieldClassName,
          'is-disabled': disabled,
          'is-valid': valid,
          'is-invalid': invalid,
          [`is-size-${size}`]: !!size,
        }
      ),
      selected: cx("TagsWrapper__selected", {
        selectedClassName: !!selectedClassName
      }),
      remove: cx("TagsWrapper__remove_btn", {
        removeBtnClassName: !!removeBtnClassName
      }),
      suggestions: cx("TagsWrapper__suggestions", {
        suggestionsClassName: !!suggestionsClassName
      }),
      activeSuggestion: cx("TagsWrapper__suggestions_active", {
        activeSuggestionClassName: !!activeSuggestionClassName
      })
    };

    return (
      <ReactTags
        autofocus={autofocus}
        autocomplete={autocomplete}
        allowDeleteFromEmptyInput={allowDeleteFromEmptyInput}
        classNames={classNames}
        delimiters={delimiters}
        id={id}
        inline={inline}
        handleAddition={this.handleAddition}
        handleDrag={this.handleDrag}
        handleDelete={this.handleDelete}
        handleInputBlur={this.handleInputBlur}
        handleInputChange={this.handleInputChange}
        handleInputFocus={this.handleInputFocus}
        minQueryLength={minQueryLength}
        name={name}
        placeholder={placeholder}
        readOnly={disabled}
        size={size}
        suggestions={suggestions}
        tags={tags}
      />
    );
  }
}

export default Tags;
