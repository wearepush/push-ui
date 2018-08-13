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
    * Read-only mode without the input box and
    * removeComponent and drag-n-drop features disabled
    */
    readOnly: bool,
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
    * Array of visible tags
    */
    tags: array,
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
    minQueryLength: 2,
    name: '',
    onAdd: undefined,
    onBlur: undefined,
    onDrag: undefined,
    onChange: undefined,
    onDelete: undefined,
    onFocus: undefined,
    placeholder: '',
    readOnly: false,
    removeBtnClassName: '',
    selectedClassName: '',
    size: 'medium',
    suggestions: [],
    suggestionsClassName: '',
    tags: [],
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
      // TODO: replace tags to defaultValue
      this.state = {
        tags: this.handleAccessor(props.tags),
        suggestions: this.handleAccessor(props.suggestions)
      };
    }
  }

  handleAccessor = (arrayObj) => {
    const { accessor } = this.props;
    const { id, value } = accessor;

    let result = [];
    if (arrayObj && arrayObj.length > 0) {
      result = arrayObj.map((el, i) => ({
        id: arrayObj[i][id],
        text: arrayObj[i][value]
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

  handleAddition = (value) => {
    const { onAdd } = this.props;
    const tag = this.parseValue(value);
    if (!this.isControled) this.setState(state => ({ tags: [...state.tags, tag] }));
    onAdd && onAdd([...this.props.tags, tag], tag);
  }

  handleDelete = (i) => {
    if (this.props.readOnly) return;
    const { onDelete } = this.props;
    const tagsList = this.isControled ? this.props.tags : this.state.tags;
    const tags = tagsList.filter((tag, index) => index !== i);
    if (!this.isControled) this.setState({ tags });
    onDelete && onDelete(tags, tagsList[i]);
  }

  handleDrag = (value, currPos, newPos) => {
    if (this.props.readOnly) return;
    const { onDrag } = this.props;
    const tags = this.isControled ? this.props.tags : this.state.tags;
    const newTags = tags.slice();
    const tag = this.parseValue(value);
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    if (!this.isControled) this.setState({ tags: newTags });
    onDrag && onDrag(newTags);
  }

  handleInputBlur = (event) => {
    const { onBlur } = this.props;
    onBlur && onBlur(event, this.props.tags);
  }

  handleInputChange = (event) => {
    const { onChange } = this.props;
    onChange && onChange(event, this.props.tags);
  }

  handleInputFocus = (event) => {
    const { onFocus } = this.props;
    onFocus && onFocus(event, this.props.tags);
  }

  render() {
    let tags = [];
    let suggestions = [];
    if (this.isControled) {
      tags = this.handleAccessor(this.props.tags);
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
      minQueryLength,
      name,
      placeholder,
      readOnly,
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
        'is-readonly': readOnly,
        [`is-size-${size}`]: !!size,
      }),
      tags: cx("TagsWrapper__tags", { tagsClassName: !!tagsClassName, 'is-readonly': readOnly }),
      tagInput: cx("TagsWrapper__input", { tagInputClassName: !!tagInputClassName }),
      tagInputField: cx("TagsWrapper__input_field",
        {
          tagInputFieldClassName: !!tagInputFieldClassName,
          'is-disabled': disabled,
          'is-valid': valid,
          'is-invalid': invalid,
          [`is-size-${size}`]: !!size,
        }
      ),
      selected: cx("TagsWrapper__selected", { selectedClassName: !!selectedClassName }),
      remove: cx("TagsWrapper__remove_btn", { removeBtnClassName: !!removeBtnClassName }),
      suggestions: cx("TagsWrapper__suggestions", { suggestionsClassName: !!suggestionsClassName }),
      activeSuggestion: cx("TagsWrapper__suggestions_active", { activeSuggestionClassName: !!activeSuggestionClassName })
    };

    return (
      <ReactTags
        autofocus={autofocus}
        autocomplete={autocomplete}
        allowDeleteFromEmptyInput={allowDeleteFromEmptyInput}
        classNames={classNames}
        delimiters={delimiters}
        disabled={disabled}
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
        readOnly={readOnly}
        size={size}
        suggestions={suggestions}
        tags={tags}
      />
    );
  }
}

export default Tags;
