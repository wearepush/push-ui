module.exports = {
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.stories.js",
    "!src/**/__tests__/**/*.js"
  ],
  coverageReporters: ["text", "lcov", "html"],
  moduleFileExtensions: ["jsx", "js", "json"],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleNameMapper: {
    "^.*\\.(css|scss)$": "identity-obj-proxy"
  },
  moduleDirectories: ["node_modules"],
  testEnvironment: "jsdom",
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  setupFiles: ["<rootDir>/jest.setup.js"],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};
