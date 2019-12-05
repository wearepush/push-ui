import { Checkbox, Radio, TextArea, TextField } from "../index";

describe("index", () => {
  it("should export Checkbox", () => {
    expect(typeof Checkbox).toBe("function");
  });

  it("should export Radio", () => {
    expect(typeof Radio).toBe("function");
  });

  it("should export TextArea", () => {
    expect(typeof TextArea).toBe("function");
  });

  it("should export TextField", () => {
    expect(typeof TextField).toBe("object");
  });
});
