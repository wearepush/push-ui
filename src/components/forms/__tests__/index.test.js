import {
  FormButton,
  FormCheckbox,
  FormField,
  FormFieldError,
  FormFieldLabel,
  FormTextArea,
  FormTextField,
} from '../index';

describe('index', () => {
  it('should export FormButton', () => {
    expect(typeof FormButton).toBe('function');
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

  it('should export FormTextArea', () => {
    expect(typeof FormTextArea).toBe('function');
  });

  it('should export FormTextField', () => {
    expect(typeof FormTextField).toBe('function');
  });
});
