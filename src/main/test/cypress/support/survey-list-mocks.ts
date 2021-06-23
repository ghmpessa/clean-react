import * as Http from './http-mocks'
import faker from 'faker'

export const mockUnexpectedError = (): void => Http.mockServerError(/surveys/, 'GET')
