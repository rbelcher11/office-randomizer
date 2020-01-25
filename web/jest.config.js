module.exports = {
    coverageReporters: [
        'lcov',
        'html'
    ],
    coveragePathIgnorePatterns: [
        '<rootDir>/src/__testutils__'
    ],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/src/__testutils__/style.mock.js',
        '\\.(jpg|jpeg|png|gif|svg|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__testutils__/file.mock.js'
    },
    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    setupFiles: [
        '<rootDir>/src/__testutils__/requestAnimationFrame.js'
    ],
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    testEnvironment: 'jest-environment-jsdom-global',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};
