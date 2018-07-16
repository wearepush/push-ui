import { configure, storiesOf } from '@storybook/react';
// import { setOptions } from '@storybook/addon-options';
// import { specs } from 'storybook-addon-specifications'

// setOptions({
//   name: 'AgileUI',
//   url: 'https://github.com/agile-pm/agile-ui'
// });

// import Documentation from './components/Documentation.jsx';

// Import context (webpack) for demo and components:
const demoContext = require.context('../src/', true, /_.+\/[A-Z]\w+\.demo\.jsx$/);
const testContext = require.context('../src/', true, /_.+\/[A-Z]\w+\.test\.js$/);
const componentContext = require.context('!!raw-loader!../src/', true, /_.+\/components\/[A-Z]\w+\.jsx$/);

function loadStories() {

  // Import stylesheet:
  // require('../src/styles/index.scss');
  // require('./styles/index.scss');

  // Import paths for organizing docs:
  let componentPaths = componentContext.keys();
  let demoPaths = demoContext.keys();
  let testPaths = testContext.keys();

  let doc = {};

  // Aggregate component source:
  componentPaths.forEach((path) => {

    let categoryName = /_(\w+)\/.+\.jsx$/.exec(path)[1];
    let componentName = /([A-Z]\w+)\.jsx$/.exec(path)[1];

    if(!doc.hasOwnProperty(categoryName))
      doc[categoryName] = {};
    if(!doc[categoryName].hasOwnProperty(componentName))
      doc[categoryName][componentName] = {};

    doc[categoryName][componentName].src = componentContext(path);

  });

  // Aggregate component demos:
  demoPaths.forEach((path) => {

    let categoryName = /_(\w+)\/.+\.jsx$/.exec(path)[1];
    let componentName = /([A-Z]\w+)\.demo\.jsx$/.exec(path)[1];

    if(!doc.hasOwnProperty(categoryName))
      doc[categoryName] = {};
    if(!doc[categoryName].hasOwnProperty(componentName))
      doc[categoryName][componentName] = {};

    doc[categoryName][componentName].demo = demoContext(path).default;

  });

  // Aggregate component tests:
  // testPaths.forEach((path) => {

  //   let categoryName = /_(\w+)\/.+\.js$/.exec(path)[1];
  //   let componentName = /([A-Z]\w+)\.test\.js$/.exec(path)[1];

  //   if(!doc.hasOwnProperty(categoryName))
  //     doc[categoryName] = {};
  //   if(!doc[categoryName].hasOwnProperty(componentName))
  //     doc[categoryName][componentName] = {};

  //   doc[categoryName][componentName].test = path;

  // });

}

configure(loadStories, module);

