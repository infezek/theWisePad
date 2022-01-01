import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null string', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty strings', () => {
    const email: string = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept local part larger than 64 chars', () => {
    const email = 'a'.repeat(65) + '@example.com'
    expect(Email.validate(email)).toBeFalsy()
  })
})
