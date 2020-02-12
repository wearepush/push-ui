import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";

import Checkbox from "./Checkbox";

storiesOf("inputs/Checkbox", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Checkbox
      defaultChecked
      disabled={boolean("disabled", false)}
      invalid={boolean("invalid", false)}
      onFocus={action("focus")}
      onChange={action("change")}
      onBlur={action("blur")}
      name="checkbox-0"
      placeholder="Checkbox placeholder"
      size={select("size", ["xs", "sm", "md", "lg", "xl"], "sm")}
      valid={boolean("valid", false)}
    >
      Normal Checkbox
    </Checkbox>
  ))
  .add("controlled", () => (
    <Checkbox
      checked
      name="checkbox-0"
      onFocus={action("focus")}
      onChange={action("change")}
      onBlur={action("blur")}
      placeholder="Checkbox placeholder"
    />
  ));
