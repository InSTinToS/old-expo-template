module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components',
    './src/tests/mocks/index.ts'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!scr/**/*.spec.tsx'],
  coverageReporters: ['lcov']
}
