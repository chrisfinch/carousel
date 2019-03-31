var __makeTemplateObject =
	(this && this.__makeTemplateObject) ||
	function(cooked, raw) {
		if (Object.defineProperty) {
			Object.defineProperty(cooked, "raw", { value: raw });
		} else {
			cooked.raw = raw;
		}
		return cooked;
	};
var __extends =
	(this && this.__extends) ||
	(function() {
		var extendStatics = function(d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(d, b) {
						d.__proto__ = b;
					}) ||
				function(d, b) {
					for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function(d, b) {
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype =
				b === null
					? Object.create(b)
					: ((__.prototype = b.prototype), new __());
		};
	})();
/** @jsx jsx */
import React, { createRef } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import {
	BreakpointMobile,
	mqMobile,
	mqMobileString,
	TestGrey
} from "./constants";
import { NextButton, PrevButton } from "./components/button.component";
import { HeadingContainer, TextContainer } from "./components/text.component";
import CenteredImage from "./components/centered-image.component";
var GreyContainer = styled.div(
	templateObject_1 ||
		(templateObject_1 = __makeTemplateObject(
			[
				"\n\tbackground-color: ",
				";\n\tpadding: 16px;\n\t@media (max-width: ",
				"px) {\n\t\tpadding-bottom: 32px;\n\t}\n"
			],
			[
				"\n\tbackground-color: ",
				";\n\tpadding: 16px;\n\t@media (max-width: ",
				"px) {\n\t\tpadding-bottom: 32px;\n\t}\n"
			]
		)),
	TestGrey,
	BreakpointMobile
);
var Carousel = /** @class */ (function(_super) {
	__extends(Carousel, _super);
	function Carousel() {
		var _this = (_super !== null && _super.apply(this, arguments)) || this;
		_this.state = {
			imgContainerWidth: 200,
			containerWidth: 200,
			widthPerImage: 200,
			offset: 0
		};
		_this.carousel = createRef();
		_this.container = createRef();
		_this.imageContainer = createRef();
		_this.imagesLoadedPromises = [];
		_this.imageMargin = 8;
		_this._bindImagesLoaded = function() {
			return function(aPromise) {
				_this.imagesLoadedPromises.push(aPromise);
			};
		};
		return _this;
	}
	Carousel.prototype.componentDidMount = function() {
		var _this = this;
		this._calculateImageSize.call(this);
		Promise.all(this.imagesLoadedPromises).then(function() {
			_this._calculateContainerWidth.call(_this);
		});
		window.addEventListener("resize", function() {
			_this._calculateImageSize();
			_this._calculateContainerWidth();
		});
	};
	Carousel.prototype._calculateImageSize = function() {
		var _this = this;
		var imagesToDisplay = this.props.imagesToDisplay;
		var isMobile;
		if ("matchMedia" in window) {
			isMobile = window.matchMedia(mqMobileString).matches;
		} else {
			var carouselWidth = this.carousel.current.getBoundingClientRect()
				.width;
			isMobile = carouselWidth < BreakpointMobile;
		}
		var containerWidth = this.container.current.getBoundingClientRect()
			.width;
		var derivedImagesToDisplay = isMobile ? 1 : imagesToDisplay;
		this.setState(function(oldState) {
			return {
				containerWidth: containerWidth,
				widthPerImage: isMobile
					? containerWidth
					: containerWidth / derivedImagesToDisplay -
					  _this.imageMargin
			};
		});
	};
	Carousel.prototype._calculateContainerWidth = function() {
		var imgContainerWidth = this.imageContainer.current.getBoundingClientRect()
			.width;
		this.setState(function(oldState) {
			return {
				imgContainerWidth: imgContainerWidth
			};
		});
	};
	Carousel.prototype._next = function(event) {
		var _this = this;
		event.preventDefault();
		this.setState(function(oldState) {
			return {
				offset: Math.min(
					oldState.offset +
						(oldState.widthPerImage + _this.imageMargin),
					oldState.imgContainerWidth - oldState.containerWidth
				)
			};
		});
	};
	Carousel.prototype._prev = function(event) {
		var _this = this;
		event.preventDefault();
		this.setState(function(oldState) {
			return {
				offset: Math.max(
					oldState.offset -
						(oldState.widthPerImage + _this.imageMargin),
					0
				)
			};
		});
	};
	Carousel.prototype.render = function() {
		var _this = this;
		var _a = this.props,
			images = _a.images,
			title = _a.title;
		var _b = this.state,
			widthPerImage = _b.widthPerImage,
			offset = _b.offset;
		return jsx(
			"div",
			{
				className: "carousel",
				ref: this.carousel,
				css: { position: "relative" }
			},
			jsx(
				GreyContainer,
				{ className: "carousel__title" },
				jsx(HeadingContainer, null, title)
			),
			jsx(
				"div",
				{
					className: "carousel__contents",
					css: { padding: "16px 14px" }
				},
				jsx(
					"div",
					{
						className: "carousel__container",
						ref: this.container,
						css: {
							width: "100%",
							overflow: "hidden",
							position: "relative"
						}
					},
					jsx(
						"ul",
						{
							className: "carousel__images",
							ref: this.imageContainer,
							css: {
								display: "inline-flex",
								listStyle: "none",
								margin: 0,
								padding: 0,
								overflow: "hidden",
								position: "relative",
								left: offset * -1,
								transition: "left 0.2s ease-in-out"
							}
						},
						images.map(function(image) {
							return jsx(
								"li",
								{
									className: "carousel__image-container",
									css: css(
										templateObject_2 ||
											(templateObject_2 = __makeTemplateObject(
												[
													"\n\t\t\t\t\t\t\t\t\t\twidth: ",
													"px;\n\t\t\t\t\t\t\t\t\t\tflex: 0 0 auto;\n\t\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t\t\t\t\tmargin-right: ",
													"px;\n\t\t\t\t\t\t\t\t\t\t&:last-child {\n\t\t\t\t\t\t\t\t\t\t\tmargin-right: 0;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t"
												],
												[
													"\n\t\t\t\t\t\t\t\t\t\twidth: ",
													"px;\n\t\t\t\t\t\t\t\t\t\tflex: 0 0 auto;\n\t\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\t\t\t\t\tmargin-right: ",
													"px;\n\t\t\t\t\t\t\t\t\t\t&:last-child {\n\t\t\t\t\t\t\t\t\t\t\tmargin-right: 0;\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t"
												]
											)),
										widthPerImage,
										_this.imageMargin
									),
									key: image.get("id")
								},
								jsx(
									"div",
									{
										className: "image__frame",
										css: {
											overflow: "hidden",
											position: "relative",
											width: "100%",
											height: widthPerImage
										}
									},
									jsx(CenteredImage, {
										image: image,
										bindLoadedPromise: _this._bindImagesLoaded.bind(
											_this
										)()
									})
								),
								jsx(
									"div",
									{
										className: "image__meta",
										css: { paddingTop: "12px" }
									},
									jsx(
										TextContainer,
										{ className: "image__title" },
										image.get("tags")
									),
									jsx(
										TextContainer,
										{ className: "image__user" },
										"by ",
										image.get("user")
									)
								)
							);
						})
					)
				)
			),
			jsx(
				GreyContainer,
				{
					className: "carousel__controls",
					css: css(
						templateObject_3 ||
							(templateObject_3 = __makeTemplateObject(
								[
									"\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\tbox-sizing: border-box;\n\n\t\t\t\t\t\t",
									"\n\t\t\t\t\t"
								],
								[
									"\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\tbox-sizing: border-box;\n\n\t\t\t\t\t\t",
									"\n\t\t\t\t\t"
								]
							)),
						mqMobile(
							"\n\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\t\t\tpadding: 0 14px;\n\t\t\t\t\t\t\tpointer-events: none;\n\t\t\t\t\t\t"
						)
					)
				},
				jsx(
					"div",
					{
						className: "carousel__controls-buttons",
						css: {
							position: "relative",
							width: "100%",
							height: "100%",
							pointerEvents: "none"
						}
					},
					jsx(PrevButton, {
						className: "carousel__prev",
						css: css(
							templateObject_4 ||
								(templateObject_4 = __makeTemplateObject(
									[
										"\n\t\t\t\t\t\t\t\tmargin-right: 6px;\n\t\t\t\t\t\t\t"
									],
									[
										"\n\t\t\t\t\t\t\t\tmargin-right: 6px;\n\t\t\t\t\t\t\t"
									]
								))
						),
						onClick: this._prev.bind(this),
						tabIndex: 0
					}),
					jsx(NextButton, {
						className: "carousel__next",
						onClick: this._next.bind(this),
						tabIndex: 0
					})
				)
			)
		);
	};
	Carousel.defaultProps = {
		imagesToDisplay: 6
	};
	return Carousel;
})(React.Component);
export default Carousel;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
