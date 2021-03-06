var __extends =
	(this && this.__extends) ||
	(function() {
		var extendStatics = function(d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(d, b) {
						d.__proto__ = b;
					}) ||
				function(d, b) {
					for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function(d, b) {
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype =
				b === null
					? Object.create(b)
					: ((__.prototype = b.prototype), new __());
		};
	})();
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
var ImageWhenLoaded = /** @class */ (function(_super) {
	__extends(ImageWhenLoaded, _super);
	function ImageWhenLoaded() {
		var _this = (_super !== null && _super.apply(this, arguments)) || this;
		_this.imageRef = React.createRef();
		return _this;
	}
	ImageWhenLoaded.prototype.componentDidMount = function() {
		var _this = this;
		this.imageRef.current.addEventListener("load", function() {
			_this.props.bindLoadedPromise(Promise.resolve(true));
		});
	};
	ImageWhenLoaded.prototype.render = function() {
		var imageProps = __assign({}, this.props);
		delete imageProps.bindLoadedPromise;
		return React.createElement(
			"img",
			__assign({ ref: this.imageRef }, imageProps)
		);
	};
	return ImageWhenLoaded;
})(React.Component);
export default ImageWhenLoaded;
