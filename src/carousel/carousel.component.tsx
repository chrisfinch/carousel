/** @jsx jsx */
import React, { createRef } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ImmutableMap, PixaBayData } from "../types";
import { List } from "immutable";
import {
	BreakpointMobile,
	mqMobile,
	mqMobileString,
	TestGrey
} from "./constants";
import { NextButton, PrevButton } from "./components/button.component";
import { HeadingContainer, TextContainer } from "./components/text.component";
import CenteredImage from "./components/centered-image.component";

interface ICarouselProps {
	images: List<ImmutableMap<PixaBayData.IImageData>>;
	imagesToDisplay: number;
	title: string;
}

interface ICarouselState {
	containerWidth: number;
	imgContainerWidth: number;
	widthPerImage: number;
	offset: number;
}

const GreyContainer = styled.div`
	background-color: ${TestGrey};
	padding: 16px;
	@media (max-width: ${BreakpointMobile}px) {
		padding-bottom: 32px;
	}
`;

export default class Carousel extends React.Component<
	ICarouselProps,
	ICarouselState
> {
	static defaultProps = {
		imagesToDisplay: 6
	};

	state = {
		imgContainerWidth: 200,
		containerWidth: 200,
		widthPerImage: 200,
		offset: 0
	};

	private carousel = createRef<HTMLDivElement>();
	private container = createRef<HTMLDivElement>();
	private imageContainer = createRef<HTMLUListElement>();
	private imagesLoadedPromises: Array<Promise<boolean>> = [];
	private imageMargin = 8;

	componentDidMount(): void {
		this._calculateImageSize.call(this);

		Promise.all(this.imagesLoadedPromises).then(() => {
			this._calculateContainerWidth.call(this);
		});

		window.addEventListener("resize", () => {
			this._calculateImageSize();
			this._calculateContainerWidth();
		});
	}

	_calculateImageSize(): void {
		const { imagesToDisplay } = this.props;

		let isMobile: boolean;

		if ("matchMedia" in window) {
			isMobile = window.matchMedia(mqMobileString).matches;
		} else {
			const carouselWidth = this.carousel.current!.getBoundingClientRect()
				.width;
			isMobile = carouselWidth < BreakpointMobile;
		}

		const containerWidth = this.container.current!.getBoundingClientRect()
			.width;

		const derivedImagesToDisplay = isMobile ? 1 : imagesToDisplay;

		this.setState(oldState => ({
			containerWidth,
			widthPerImage: isMobile
				? containerWidth
				: containerWidth / derivedImagesToDisplay - this.imageMargin
		}));
	}

	_calculateContainerWidth(): void {
		const imgContainerWidth = this.imageContainer.current!.getBoundingClientRect()
			.width;
		this.setState(oldState => ({
			imgContainerWidth
		}));
	}

	_bindImagesLoaded = () => (aPromise: Promise<boolean>) => {
		this.imagesLoadedPromises.push(aPromise);
	};

	_next(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		this.setState(oldState => ({
			offset: Math.min(
				oldState.offset + (oldState.widthPerImage + this.imageMargin),
				oldState.imgContainerWidth - oldState.containerWidth
			)
		}));
	}

	_prev(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		this.setState(oldState => ({
			offset: Math.max(
				oldState.offset - (oldState.widthPerImage + this.imageMargin),
				0
			)
		}));
	}

	render() {
		const { images, title } = this.props;

		const { widthPerImage, offset } = this.state;

		return (
			<div
				className="carousel"
				ref={this.carousel}
				css={{ position: "relative" }}
			>
				<GreyContainer className="carousel__title">
					<HeadingContainer>{title}</HeadingContainer>
				</GreyContainer>

				<div
					className="carousel__contents"
					css={{ padding: "16px 14px" }}
				>
					<div
						className="carousel__container"
						ref={this.container}
						css={{
							width: "100%",
							overflow: "hidden",
							position: "relative"
						}}
					>
						<ul
							className="carousel__images"
							ref={this.imageContainer}
							css={{
								display: "inline-flex",
								listStyle: "none",
								margin: 0,
								padding: 0,
								overflow: "hidden",
								position: "relative",
								left: offset * -1,
								transition: "left 0.2s ease-in-out"
							}}
						>
							{images.map(image => (
								<li
									className="carousel__image-container"
									css={css`
										width: ${widthPerImage}px;
										flex: 0 0 auto;
										padding: 0;
										position: relative;
										box-sizing: border-box;
										margin-right: ${this.imageMargin}px;
										&:last-child {
											margin-right: 0;
										}
									`}
									key={image.get("id")}
								>
									<div
										className="image__frame"
										css={{
											overflow: "hidden",
											position: "relative",
											width: "100%",
											height: widthPerImage
										}}
									>
										<CenteredImage
											image={image}
											bindLoadedPromise={this._bindImagesLoaded.bind(
												this
											)()}
										/>
									</div>
									<div
										className="image__meta"
										css={{ paddingTop: "12px" }}
									>
										<TextContainer className="image__title">
											{image.get("tags")}
										</TextContainer>
										<TextContainer className="image__user">
											by {image.get("user")}
										</TextContainer>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>

				<GreyContainer
					className="carousel__controls"
					css={css`
						text-align: center;
						box-sizing: border-box;

						${mqMobile(`
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							background-color: transparent;
							padding: 0 14px;
							pointer-events: none;
						`)}
					`}
				>
					<div
						className="carousel__controls-buttons"
						css={css`
							position: "relative",
							width: "100%",
							height: "100%",
							pointerEvents: "none"
							${mqMobile(`
								width: "100%",
								height: "100%",
							`)}
						`}
					>
						<PrevButton
							className="carousel__prev"
							css={css`
								margin-right: 6px;
							`}
							onClick={this._prev.bind(this)}
							tabIndex={0}
						/>
						<NextButton
							className="carousel__next"
							onClick={this._next.bind(this)}
							tabIndex={0}
						/>
					</div>
				</GreyContainer>
			</div>
		);
	}
}
