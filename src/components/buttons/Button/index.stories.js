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
      variant={select(
        "color",
        ["primary", "warning", "success", "danger", "default"],
        "primary"
      )}
    >
      Hello Button
    </Button>
  ))
  .add("link", () => (
    <Button
      variant={select(
        "color",
        ["primary", "warning", "success", "danger", "default"],
        "primary"
      )}
      href="http://google.com/"
      size={select("size", ["small", "medium", "large"], "medium")}
      target="_blank"
      variant={select("variant", ["contained", "outlined"])}
    >
      Hello Button
    </Button>
  ));
