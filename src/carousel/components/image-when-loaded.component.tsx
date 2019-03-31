import React from "react";

interface IImageWhenLoadedProps
	extends React.ImgHTMLAttributes<HTMLImageElement> {
	bindLoadedPromise: (p: Promise<boolean>) => void;
}

export default class ImageWhenLoaded extends React.Component<
	IImageWhenLoadedProps
> {
	private imageRef = React.createRef<HTMLImageElement>();

	componentDidMount() {
		this.imageRef.current!.addEventListener("load", () => {
			this.props.bindLoadedPromise(Promise.resolve(true));
		});
	}

	render() {
		const imageProps = {
			...this.props
		};
		delete imageProps.bindLoadedPromise;
		return <img ref={this.imageRef} {...imageProps} />;
	}
}
