import React, { Fragment } from "react";
import styled from "@emotion/styled";
import svgArrow from "./../../assets/arrow.svg";
import { BreakpointMobile, TestBlue } from "../constants";

const MobileButtonWidth = 120;

export const Button = styled.button`
	pointer-events: all;
	display: inline-block;
	background-color: ${TestBlue};
	color: #fff;
	border: none;
	padding: 6px 12px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	outline: none;
	&:hover {
		background-color: #fff;
		color: ${TestBlue};
	}

	@media (max-width: ${BreakpointMobile}px) {
		background-color: rgba(255, 255, 255, 0.5);
		height: ${MobileButtonWidth}px;
		width: ${MobileButtonWidth}px;
		border-radius: 50%;
		position: absolute;
		top: 38%;
	}
`;

const ButtonText = styled.span`
	font-family: "Ropa Sans", sans-serif;
	font-size: 18px;
	@media (max-width: ${BreakpointMobile}px) {
		display: none;
	}
`;

export const ButtonLeft = styled(Button)`
	border-radius: 5px 0 0 5px;
	@media (max-width: ${BreakpointMobile}px) {
		left: -${MobileButtonWidth / 2}px;
	}
`;

export const ButtonRight = styled(Button)`
	border-radius: 0 5px 5px 0;
	@media (max-width: ${BreakpointMobile}px) {
		right: -${MobileButtonWidth / 2}px;
	}
`;

export const ButtonIcon = styled.div`
	display: none;
	text-align: left;
	svg {
		display: inline-block;
		path {
			fill: ${TestBlue};
		}
	}
	@media (max-width: ${BreakpointMobile}px) {
		display: block;
		padding-left: 12px;
	}
`;

const ButtonIconPrev = styled(ButtonIcon)`
	transform: scaleX(-1);
`;

export const PrevButton = (
	props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => (
	<ButtonLeft {...props}>
		<ButtonText className="button__text">Prev</ButtonText>
		<ButtonIconPrev
			className="button__icon"
			dangerouslySetInnerHTML={{ __html: svgArrow }}
		/>
	</ButtonLeft>
);

export const NextButton = (
	props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => (
	<ButtonRight {...props}>
		<ButtonText className="button__text">Next</ButtonText>
		<ButtonIcon
			className="button__icon"
			dangerouslySetInnerHTML={{ __html: svgArrow }}
		/>
	</ButtonRight>
);
