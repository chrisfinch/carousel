import ReactDOM from "react-dom";
import React from "react";
import "whatwg-fetch";
import Carousel from "./carousel/carousel.component";
import { fromJS } from "immutable";
fetch(
	"https://pixabay.com/api/?key=" +
		PIXABAY_API_KEY +
		"&q=beautiful+landscape&image_type=photo"
)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		return fromJS(data);
	})
	.then(function(response) {
		ReactDOM.render(
			React.createElement(
				"div",
				null,
				React.createElement(Carousel, {
					images: response.get("hits"),
					title: "Carousel Test"
				})
			),
			document.getElementById("react-mount")
		);
	});
