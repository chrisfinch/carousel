import React from "react";
import { fromJS } from "immutable";

import { storiesOf } from "@storybook/react";

import Carousel from "./carousel.component";

import PixaBayFixture from "./data/pixabay.json";
import { PixaBayData } from "../types";

const immutablePixaBayFixture = fromJS(
	PixaBayFixture
) as PixaBayData.IImmutableResponse;

storiesOf("Carousel", module)
	.addDecorator(story => (
		<div
			className="wrapper"
			style={{ maxWidth: "900px", margin: "0 auto" }}
		>
			{story()}
		</div>
	))
	.add("default", () => (
		<Carousel
			title="Carousel Test"
			images={immutablePixaBayFixture.get("hits")}
		/>
	))
	.add(
		"mobile",
		() => (
			<Carousel
				title="Carousel Test"
				images={immutablePixaBayFixture.get("hits")}
			/>
		),
		{
			viewport: {
				defaultViewport: "mobile"
			}
		}
	);
