module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!**/*.d.ts' // não vou fazer coverage disso
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform:{
        '.+\\.(ts | tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1',
      '\\.scss$': 'identity-obj-proxy' // biblioteca usa um teste double , gera um dummy daqueles objetos 
                                      // que encontrar com scss para não interfirirem no nosso teste
    }
}