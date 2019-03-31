module.exports = async ({ config, mode }) => {
	config.module.rules = [
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
	];

	config.resolve.extensions.push(".ts", ".tsx");
	config.devtool = "source-map";
	config.mode = "development";

	return config;
};
