import { left } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { User } from './user'

describe('User domain entity', () => {
  it('should not create user with invalid e-mail address', () => {
    const invalidEmail = 'invalid-email'
    const error = User.create({ name: 'John', email: invalidEmail })
    expect(error).toEqual(left(new InvalidEmailError()))
  })
})
