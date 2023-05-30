const jestConfig = {
    verbose: true,
    testURL: "http://localhost/",
    'transform': {
      '^.+\\.jsx?$': 'babel-jest',
    },
    // testMatch: ['**/__tests__/*.js?(x)'],
    "testMatch": [
        // "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
        "<rootDir>/src/__tests__/*.(test).{js,jsx,ts,tsx}",
        // "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
      ],
  }
  
  module.exports = jestConfig


  