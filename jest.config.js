module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
   },
   verbose: true,
  moduleFileExtensions: [
    "ts",
    "tsx",
    "vue",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{vue}','**/src/components/**','!**/node_modules/**', '!<rootDir>/dist/**',
  '!<rootDir>/src/plugins/**', '!<rootDir>/tests/unit/**'
  ],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.js"
  },
  coverageReporters: ['lcov', 'text-summary'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
