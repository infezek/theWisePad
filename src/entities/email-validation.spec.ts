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

  test('should not accept domain part larger than 255 chars', () => {
    const email = 'local@' + 'd'.repeat(128) + '.' + 'd'.repeat(127)
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty local part', () => {
    const email = '@' + 'd'.repeat(20) + '.' + 'd'.repeat(20)
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty domain', () => {
    const email = 'local@'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty domain', () => {
    const email = 'local@'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept domain with a part larger than 63 chars', () => {
    const email = 'any@' + 'd'.repeat(64) + '.com'
    expect(Email.validate(email)).toBeFalsy()
  })
})
