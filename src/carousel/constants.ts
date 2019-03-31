export const TestBlue = "#035288";
export const TestGrey = "#E4EBE0";
export const BreakpointMobile = 375; // iPhone X
export const mqMobileString = `(max-width: ${BreakpointMobile}px)`;
export const mqMobile = (content: string) =>
	`@media ${mqMobileString} {${content}`;
