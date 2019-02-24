import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "jest-emotion";
import { create } from "react-test-renderer";
import * as emotion from "emotion";
import { ThemeProvider } from "emotion-theming";

import themes from "./src/styles/themes";

const theme = themes.standard();

Enzyme.configure({ adapter: new Adapter() });

const renderWithTheme = renderFn => (component, ...rest) =>
  renderFn(<ThemeProvider theme={theme}>{component}</ThemeProvider>, rest);

const shallowWithTheme = tree => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();
  return shallow(tree, { context });
};

const mountWithTheme = tree => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext();

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes
  });
};

global.shallow = shallowWithTheme;
global.render = renderWithTheme(render);
global.create = renderWithTheme(create);
global.mount = mountWithTheme;
global.renderToHtml = renderWithTheme(renderToStaticMarkup);

// This is defined by webpack in storybook builds using the DefinePlugin plugin.
global.STORYBOOK = false;

// Add a snapshot serializer that removes random hashes
// from emotion class names.
expect.addSnapshotSerializer(
  createSerializer(emotion, {
    classNameReplacer(className, index) {
      return `ui-${index}`;
    }
  })
);
