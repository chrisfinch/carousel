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
var __assign =
	(this && this.__assign) ||
	function() {
		__assign =
			Object.assign ||
			function(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p))
							t[p] = s[p];
				}
				return t;
			};
		return __assign.apply(this, arguments);
	};
import React from "react";
import styled from "@emotion/styled";
import svgArrow from "./../../assets/arrow.svg";
import { BreakpointMobile, TestBlue } from "../constants";
var MobileButtonWidth = 120;
export var Button = styled.button(
	templateObject_1 ||
		(templateObject_1 = __makeTemplateObject(
			[
				"\n\tpointer-events: all;\n\tdisplay: inline-block;\n\tbackground-color: ",
				";\n\tcolor: #fff;\n\tborder: none;\n\tpadding: 6px 12px;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n\toutline: none;\n\t&:hover {\n\t\tbackground-color: #fff;\n\t\tcolor: ",
				";\n\t}\n\n\t@media (max-width: ",
				"px) {\n\t\tbackground-color: rgba(255, 255, 255, 0.5);\n\t\theight: ",
				"px;\n\t\twidth: ",
				"px;\n\t\tborder-radius: 50%;\n\t\tposition: absolute;\n\t\ttop: 38%;\n\t}\n"
			],
			[
				"\n\tpointer-events: all;\n\tdisplay: inline-block;\n\tbackground-color: ",
				";\n\tcolor: #fff;\n\tborder: none;\n\tpadding: 6px 12px;\n\tcursor: pointer;\n\ttransition: all 0.2s ease-in-out;\n\toutline: none;\n\t&:hover {\n\t\tbackground-color: #fff;\n\t\tcolor: ",
				";\n\t}\n\n\t@media (max-width: ",
				"px) {\n\t\tbackground-color: rgba(255, 255, 255, 0.5);\n\t\theight: ",
				"px;\n\t\twidth: ",
				"px;\n\t\tborder-radius: 50%;\n\t\tposition: absolute;\n\t\ttop: 38%;\n\t}\n"
			]
		)),
	TestBlue,
	TestBlue,
	BreakpointMobile,
	MobileButtonWidth,
	MobileButtonWidth
);
var ButtonText = styled.span(
	templateObject_2 ||
		(templateObject_2 = __makeTemplateObject(
			[
				'\n\tfont-family: "Ropa Sans", sans-serif;\n\tfont-size: 18px;\n\t@media (max-width: ',
				"px) {\n\t\tdisplay: none;\n\t}\n"
			],
			[
				'\n\tfont-family: "Ropa Sans", sans-serif;\n\tfont-size: 18px;\n\t@media (max-width: ',
				"px) {\n\t\tdisplay: none;\n\t}\n"
			]
		)),
	BreakpointMobile
);
export var ButtonLeft = styled(Button)(
	templateObject_3 ||
		(templateObject_3 = __makeTemplateObject(
			[
				"\n\tborder-radius: 5px 0 0 5px;\n\t@media (max-width: ",
				"px) {\n\t\tleft: -",
				"px;\n\t}\n"
			],
			[
				"\n\tborder-radius: 5px 0 0 5px;\n\t@media (max-width: ",
				"px) {\n\t\tleft: -",
				"px;\n\t}\n"
			]
		)),
	BreakpointMobile,
	MobileButtonWidth / 2
);
export var ButtonRight = styled(Button)(
	templateObject_4 ||
		(templateObject_4 = __makeTemplateObject(
			[
				"\n\tborder-radius: 0 5px 5px 0;\n\t@media (max-width: ",
				"px) {\n\t\tright: -",
				"px;\n\t}\n"
			],
			[
				"\n\tborder-radius: 0 5px 5px 0;\n\t@media (max-width: ",
				"px) {\n\t\tright: -",
				"px;\n\t}\n"
			]
		)),
	BreakpointMobile,
	MobileButtonWidth / 2
);
export var ButtonIcon = styled.div(
	templateObject_5 ||
		(templateObject_5 = __makeTemplateObject(
			[
				"\n\tdisplay: none;\n\ttext-align: left;\n\tsvg {\n\t\tdisplay: inline-block;\n\t\tpath {\n\t\t\tfill: ",
				";\n\t\t}\n\t}\n\t@media (max-width: ",
				"px) {\n\t\tdisplay: block;\n\t\tpadding-left: 12px;\n\t}\n"
			],
			[
				"\n\tdisplay: none;\n\ttext-align: left;\n\tsvg {\n\t\tdisplay: inline-block;\n\t\tpath {\n\t\t\tfill: ",
				";\n\t\t}\n\t}\n\t@media (max-width: ",
				"px) {\n\t\tdisplay: block;\n\t\tpadding-left: 12px;\n\t}\n"
			]
		)),
	TestBlue,
	BreakpointMobile
);
var ButtonIconPrev = styled(ButtonIcon)(
	templateObject_6 ||
		(templateObject_6 = __makeTemplateObject(
			["\n\ttransform: scaleX(-1);\n"],
			["\n\ttransform: scaleX(-1);\n"]
		))
);
export var PrevButton = function(props) {
	return React.createElement(
		ButtonLeft,
		__assign({}, props),
		React.createElement(ButtonText, { className: "button__text" }, "Prev"),
		React.createElement(ButtonIconPrev, {
			className: "button__icon",
			dangerouslySetInnerHTML: { __html: svgArrow }
		})
	);
};
export var NextButton = function(props) {
	return React.createElement(
		ButtonRight,
		__assign({}, props),
		React.createElement(ButtonText, { className: "button__text" }, "Next"),
		React.createElement(ButtonIcon, {
			className: "button__icon",
			dangerouslySetInnerHTML: { __html: svgArrow }
		})
	);
};
var templateObject_1,
	templateObject_2,
	templateObject_3,
	templateObject_4,
	templateObject_5,
	templateObject_6;
