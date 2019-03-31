import styled from "@emotion/styled";
import { mqMobile, TestBlue } from "../constants";

export const BaseTextContainer = styled.div`
	font-family: "Ropa Sans", sans-serif;
	color: ${TestBlue};
`;

export const HeadingContainer = styled(BaseTextContainer)`
	font-size: 42px;
`;

export const TextContainer = styled(BaseTextContainer)`
	font-size: 16px;
	margin-bottom: 6px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	${mqMobile(`font-size: 24px;`)}
`;
