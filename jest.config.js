module.exports = {
  testURL: "http://localhost",
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.stories.js",
    "!src/**/__tests__/**/*.js"
  ],
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["js"],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    "^.*\\.(css|scss)$": "identity-obj-proxy"
  },
  moduleDirectories: ["node_modules"],
  testEnvironment: "jsdom",
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};
