/**
 * For a detailed explanation regarding each configuration property, visit:
 * https:
 */

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",

  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  testTimeout: 10000,
  verbose: true,
};
export default config;
