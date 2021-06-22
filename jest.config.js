module.exports = {
	testPathIgnorePatterns: ["/node_modules"], // pastas ignoradas
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
	},
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  testEnvironment: "jsdom"
}