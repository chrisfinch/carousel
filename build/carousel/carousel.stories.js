import React from "react";
import { fromJS } from "immutable";
import { storiesOf } from "@storybook/react";
import Carousel from "./carousel.component";
import PixaBayFixture from "./data/pixabay.json";
var immutablePixaBayFixture = fromJS(PixaBayFixture);
storiesOf("Carousel", module)
	.addDecorator(function(story) {
		return React.createElement(
			"div",
			{
				className: "wrapper",
				style: { maxWidth: "900px", margin: "0 auto" }
			},
			story()
		);
	})
	.add("default", function() {
		return React.createElement(Carousel, {
			title: "Carousel Test",
			images: immutablePixaBayFixture.get("hits")
		});
	})
	.add(
		"mobile",
		function() {
			return React.createElement(Carousel, {
				title: "Carousel Test",
				images: immutablePixaBayFixture.get("hits")
			});
		},
		{
			viewport: {
				defaultViewport: "mobile"
			}
		}
	);
