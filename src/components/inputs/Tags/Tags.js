import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import { array, bool, func, object, string, oneOfType } from 'prop-types';
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
    accessor: oneOfType([
      func,
      object
    ]),
    /**
    * Active suggestion class name
    */
    activeSuggestionClassName: string,
    /**
    * Default array of values in uncontroled component
    */
    defaultValue: array,
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
    * Array of values in controled component
    */
    value: array
  };

  static defaultProps = {
    accessor: {
      id: 'id',
      value: 'value'
    },
    activeSuggestionClassName: '',
    defaultValue: [],
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
    suggestionsClassName: '',
    tags: [],
    tagClassName: '',
    tagsClassName: '',
    tagInputClassName: '',
    tagInputFieldClassName: '',
    value: undefined
  };

  constructor(props) {
    super(props);
    this.isControled = props.value !== undefined;
    if (!this.isControled) {
      this.state = {
        tags: this.handleAccessor(props.tags),
        suggestions: this.handleAccessor(props.defaultValue)
      };
    }
  }

  handleAccessor = (arrayObj) => {
    const { accessor } = this.props;
    if (typeof accessor === 'function') {
      return arrayObj.map(accessor);
    }
    const { id, value } = accessor;
    return arrayObj.map((el, i) => ({
      id: arrayObj[i][id],
      text: arrayObj[i][value]
    }));
  }

  handleAddition = (tag) => {
    const { onAdd } = this.props;
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

  handleDrag = (tag, currPos, newPos) => {
    if (this.props.readOnly) return;
    const { onDrag } = this.props;
    const tags = this.isControled ? this.props.tags : this.state.tags;
    const newTags = tags.slice();
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
    const { tags, suggestions } = this.isControled ? this.props : this.state;
    const {
      activeSuggestionClassName,
      placeholder,
      readOnly,
      removeBtnClassName,
      selectedClassName,
      suggestionsClassName,
      tagClassName,
      tagsClassName,
      tagInputClassName,
      tagInputFieldClassName,
    } = this.props;

    const classNames = {
      tag: cx("TagsWrapper__tag", { tagClassName: !!tagClassName, 'is-readonly': readOnly }),
      tags: cx("TagsWrapper__tags", { tagsClassName: !!tagsClassName, 'is-readonly': readOnly }),
      tagInput: cx("TagsWrapper__input", { tagInputClassName: !!tagInputClassName }),
      tagInputField: cx("TagsWrapper__input_field", { tagInputFieldClassName: !!tagInputFieldClassName }),
      selected: cx("TagsWrapper__selected", { selectedClassName: !!selectedClassName }),
      remove: cx("TagsWrapper__remove_btn", { removeBtnClassName: !!removeBtnClassName }),
      suggestions: cx("TagsWrapper__suggestions", { suggestionsClassName: !!suggestionsClassName }),
      activeSuggestion: cx("TagsWrapper__suggestions_active", { activeSuggestionClassName: !!activeSuggestionClassName })
    };

    return (
      <ReactTags
        classNames={classNames}
        delimiters={delimiters}
        handleAddition={this.handleAddition}
        handleDrag={this.handleDrag}
        handleDelete={this.handleDelete}
        handleInputBlur={this.handleInputBlur}
        handleInputChange={this.handleInputChange}
        handleInputFocus={this.handleInputFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        suggestions={suggestions}
        tags={tags}
      />
    );
  }
}

export default Tags;
