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

  test('should not accept string larger than 320 chars', () => {
    const email = 'l'.repeat(64) + '@' + 'd'.repeat(79) + '.' + 'c'.repeat(176)
    expect(Email.validate(email)).toBeFalsy()
  })
})
