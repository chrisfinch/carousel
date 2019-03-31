import { jsx } from "@emotion/core";
import ImageWhenLoaded from "./image-when-loaded.component";
var CenteredImage = function(_a) {
	var image = _a.image,
		bindLoadedPromise = _a.bindLoadedPromise;
	return jsx(
		"div",
		{
			className: "image__center",
			css: {
				position: "absolute",
				left: "50%",
				height: "100%"
			}
		},
		jsx(ImageWhenLoaded, {
			bindLoadedPromise: bindLoadedPromise,
			src: image.get("webformatURL"),
			alt: "Image of " + image.get("tags") + " by " + image.get("user"),
			css: {
				display: "block",
				height: "100%",
				position: "relative",
				left: "-50%"
			}
		})
	);
};
export default CenteredImage;
