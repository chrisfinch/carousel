import { addDecorator, addParameters, configure } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
	viewport: {
		viewports: {
			...INITIAL_VIEWPORTS,
			desktop: {
				name: "Desktop",
				styles: {
					width: "100%",
					height: "100%"
				},
				type: "desktop"
			},
			mobile: {
				name: "Mobile",
				styles: {
					width: "320px",
					height: "100%"
				},
				type: "mobile"
			}
		}
	}
});

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
