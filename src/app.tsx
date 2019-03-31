import ReactDOM from "react-dom";
import React from "react";
import "whatwg-fetch";
import Carousel from "./carousel/carousel.component";
import { PixaBayData } from "./types";
import { fromJS } from "immutable";

fetch(
	`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=beautiful+landscape&image_type=photo`
)
	.then(data => data.json())
	.then(data => fromJS(data))
	.then((response: PixaBayData.IImmutableResponse) => {
		ReactDOM.render(
			<div>
				<Carousel images={response.get("hits")} title="Carousel Test" />
			</div>,
			document.getElementById("react-mount")
		);
	});
