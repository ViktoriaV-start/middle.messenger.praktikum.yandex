import type { Config } from 'jest';
import { createDefaultPreset } from 'ts-jest';

const tsJestConfig = createDefaultPreset();

const config: Config = {
  preset: 'ts-jest',

  testEnvironment: 'jsdom',

  transform: {
    '\\.hbs\\?raw$': 'jest-transform-stub',
    ...tsJestConfig.transform,
  },

  moduleFileExtensions: ['ts', 'js'],

  clearMocks: true,
  coverageProvider: 'v8',

  testMatch: ['**/?(*.)+(spec|test).ts'],

  globals: {
    'ts-jest': {
      useESM: true,
    },
  },

  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',

    '\\.hbs\\?raw$': '<rootDir>/src/__mocks__/raw-mock.ts',
    '\\.module\\.css$': 'identity-obj-proxy',
  },
};

export default config;
