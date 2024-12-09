/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testPathIgnorePatterns: ['/node_modules', '/dist'],
  collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.ts"
    ],
    coverageReporters: [
      "text",
      "cobertura",
      "html"
    ],
    coveragePathIgnorePatterns: ["src/index.ts"],
    reporters: [
      "default"
    ],
    modulePathIgnorePatterns: ['node_modules']
    
};