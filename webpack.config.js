require("dotenv").config();
const path = require("path");
const webpack = require("webpack");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: [
					{
						loader: require.resolve("ts-loader"),
						options: {
							transpileOnly: true
						}
					}
				]
			},
			{
				test: /\.stories\.tsx?$/,
				loaders: [
					{
						loader: require.resolve(
							"@storybook/addon-storysource/loader"
						),
						options: { parser: "typescript" }
					}
				],
				enforce: "pre"
			},
			{
				test: /\.svg$/,
				use: ({ resource }) => ({
					loader: "svg-inline-loader",
					options: {
						removeSVGTagAttrs: false
					}
				})
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		modules: ["node_modules"]
	},
	plugins: [
		new webpack.DefinePlugin({
			PIXABAY_API_KEY: JSON.stringify(process.env.PIXABAY_API_KEY)
		})
	],
	entry: path.resolve(__dirname, "src/app"),
	output: {
		path: path.resolve(__dirname, "public/built")
	},
	mode: "production"
};
