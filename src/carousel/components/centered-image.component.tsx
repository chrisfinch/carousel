/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { ImmutableMap, PixaBayData } from "../../types";
import ImageWhenLoaded from "./image-when-loaded.component";
import IImageData = PixaBayData.IImageData;

const CenteredImage: React.FunctionComponent<{
	image: ImmutableMap<IImageData>;
	bindLoadedPromise: (p: Promise<boolean>) => void;
}> = ({ image, bindLoadedPromise }) => (
	<div
		className="image__center"
		css={{
			position: "absolute",
			left: "50%",
			height: "100%"
		}}
	>
		<ImageWhenLoaded
			bindLoadedPromise={bindLoadedPromise}
			src={image.get("webformatURL")}
			alt={`Image of ${image.get("tags")} by ${image.get("user")}`}
			css={{
				display: "block",
				height: "100%",
				position: "relative",
				left: "-50%"
			}}
		/>
	</div>
);

export default CenteredImage;
