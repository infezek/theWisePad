import { left } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { InvalidNameError } from './errors/invalid-name-error'
import { User } from './user'

describe('User domain entity', () => {
  it('should not create user with invalid e-mail address', () => {
    const invalidEmail = 'invalid-email'
    const error = User.create({ name: 'John', email: invalidEmail })
    expect(error).toEqual(left(new InvalidEmailError()))
  })

  it('should not create user with invalid name (too few characters)', () => {
    const invalidName = '0           '
    const error = User.create({ name: invalidName, email: 'any@mail.com' })
    expect(error).toEqual(left(new InvalidNameError()))
  })

  it('should not create user with invalid name (too few characters)', () => {
    const invalidName = '0'.repeat(257)
    const error = User.create({ name: invalidName, email: 'any@mail.com' })
    expect(error).toEqual(left(new InvalidNameError()))
  })
})
