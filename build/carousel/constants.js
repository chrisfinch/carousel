export var TestBlue = "#035288";
export var TestGrey = "#E4EBE0";
export var BreakpointMobile = 375; // iPhone X
export var mqMobileString = "(max-width: " + BreakpointMobile + "px)";
export var mqMobile = function(content) {
	return "@media " + mqMobileString + " {" + content;
};
