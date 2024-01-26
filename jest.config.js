/** @returns {Promise<import('jest').Config>} */
export default async () => {
  return {
    verbose: true,
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    transform: {
      "\\.[jt]sx?$": "babel-jest",
    },

  };
};