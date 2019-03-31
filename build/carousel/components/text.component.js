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
import styled from "@emotion/styled";
import { mqMobile, TestBlue } from "../constants";
export var BaseTextContainer = styled.div(
	templateObject_1 ||
		(templateObject_1 = __makeTemplateObject(
			['\n\tfont-family: "Ropa Sans", sans-serif;\n\tcolor: ', ";\n"],
			['\n\tfont-family: "Ropa Sans", sans-serif;\n\tcolor: ', ";\n"]
		)),
	TestBlue
);
export var HeadingContainer = styled(BaseTextContainer)(
	templateObject_2 ||
		(templateObject_2 = __makeTemplateObject(
			["\n\tfont-size: 42px;\n"],
			["\n\tfont-size: 42px;\n"]
		))
);
export var TextContainer = styled(BaseTextContainer)(
	templateObject_3 ||
		(templateObject_3 = __makeTemplateObject(
			[
				"\n\tfont-size: 16px;\n\tmargin-bottom: 6px;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\t",
				"\n"
			],
			[
				"\n\tfont-size: 16px;\n\tmargin-bottom: 6px;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\t",
				"\n"
			]
		)),
	mqMobile("font-size: 24px;")
);
var templateObject_1, templateObject_2, templateObject_3;
