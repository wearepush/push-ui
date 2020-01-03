import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Button, { ButtonComponent } from "./Button";

storiesOf("buttons/Button", module)
  .addDecorator(withInfo({
    propTables: [ButtonComponent],
  }))
  .addDecorator(withKnobs)
  .add("default", () => (
    <Button
      disabled={boolean("disabled", false)}
      rounded={select(
        "rounded",
        ["0", "xs", "sm", "md", "lg", "xl", "circle"],
        "sm"
      )}
      shadow={select(
        "shadow",
        ["0", "1", "2", "3", "4"],
        "4"
      )}
      size={select(
        "size",
        ["xs", "sm", "md", "lg", "xl"],
        "sm"
      )}
      variant={select(
        "variant",
        ["primary", "warning", "success", "danger", "brand", "dark", "light"],
        "primary"
      )}
    >
      Preview
    </Button>
  ))
  .add("link", () => (
    <Button
      href="http://google.com/"
      target="_blank"
    >
      Open google
    </Button>
  ));
