module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleNameMapper: {
		"\\.(svg)$": "<rootDir>/__test__/__mocks__/svgIconMock.js"
	},
	globals: {
		"ts-jest": {
			tsConfig: "__test__/tsconfig.test.json"
		},
		window: {}
	}
};
