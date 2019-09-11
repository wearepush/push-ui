import {
  FormButton,
  FormCheckbox,
  FormField,
  FormFieldError,
  FormFieldLabel,
  FormRadio,
  FormSelect,
  FormTextArea,
  FormTextField,
} from '../index';

describe('index', () => {
  it('should export FormButton', () => {
    expect(typeof FormButton).toBe('object');
  });

  it('should export FormCheckbox', () => {
    expect(typeof FormCheckbox).toBe('function');
  });

  it('should export FormField', () => {
    expect(typeof FormField).toBe('function');
  });

  it('should export FormFieldError', () => {
    expect(typeof FormFieldError).toBe('function');
  });

  it('should export FormFieldLabel', () => {
    expect(typeof FormFieldLabel).toBe('function');
  });

  it('should export FormRadio', () => {
    expect(typeof FormRadio).toBe('function');
  });

  it('should export FormSelect', () => {
    expect(typeof FormSelect).toBe('function');
  });

  it('should export FormTextArea', () => {
    expect(typeof FormTextArea).toBe('function');
  });

  it('should export FormTextField', () => {
    expect(typeof FormTextField).toBe('function');
  });
});
