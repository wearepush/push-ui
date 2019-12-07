import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import TextField from "./TextField";

storiesOf("inputs/TextField", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("default", () => (
    <TextField
      disabled={boolean("disabled", false)}
      invalid={boolean("invalid", false)}
      onFocus={action("focus")}
      onChange={action("change")}
      onBlur={action("blur")}
      name="TextField-0"
      placeholder="TextField placeholder"
      size={select("size", ["xs", "sm", "md", "lg", "xl"], "sm")}
      valid={boolean("valid", false)}
    />
  ))
  .add("controlled", () => (
    <TextField
      name="TextField-0"
      placeholder="TextField placeholder"
      value="text"
    />
  ));
