import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

import Button from "./Button";

storiesOf("buttons/Button", module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Button
      disabled={boolean("disabled", false)}
      rounded="circle"
      shadow={select(
        "shadow",
        ["0", "1", "2", "3", "4"],
        "4"
      )}
      variant={select(
        "color",
        ["primary", "warning", "success", "danger", "brand"],
        "primary"
      )}
    >
      Preview
    </Button>
  ))
  .add("link", () => (
    <Button
      variant={select(
        "color",
        ["primary", "warning", "success", "danger", "brand"],
        "primary"
      )}
      href="http://google.com/"
      target="_blank"
    >
      Hello Button
    </Button>
  ));
