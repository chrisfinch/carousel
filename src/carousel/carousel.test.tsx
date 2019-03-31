import React from "react";
import ReactDOMServer from "react-dom/server";
import Carousel from "./carousel.component";
import PixaBayFixture from "./data/pixabay.json";
import { fromJS } from "immutable";
import { PixaBayData } from "../types";

jest.mock("./components/image-when-loaded.component", () => () => (
	<div>image mock</div>
));

const immutablePixaBayFixture = fromJS(
	PixaBayFixture
) as PixaBayData.IImmutableResponse;

describe("Carousel", () => {
	it("renders correctly", () => {
		const wrapper = ReactDOMServer.renderToString(
			<Carousel
				images={immutablePixaBayFixture.get("hits")}
				title="Carousel Test"
			/>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
