How to add icons to the storybook

1. In the design find the necessary icon to add to the storybook and select it.
2. In the right column of the design find the word 'Export', select SVG and click 'Export "name of icon"'.
3. Copy the downloaded SVG-file in the project (path - src/components/icons/SvgIcon/svgs). There should be no spaces in the SVG-file name.
4. Remove "fill" attribute in the tags, if you are going to pass them through the props.
5. Add the name of the SVG-file to the index.js (path - src/components/icons/SvgIcon/svgs/index.js) for import and export.
6. Add the component 'SvgIcon' to 'index.stories.js' (path - src/components/icons/SvgIcon/index.stories.js) with the necessary icon props. These props are required: name, width, height, viewBox. Prop 'name' must match the name of the SVG-file.



When you want to choose the width and height of the icons in the storybook, you must select them in pairs (that is, the sequence numbers of the width and height lines must match).
This is necessary so that the icons are displayed correctly, and that the icons match the selected width and height.
