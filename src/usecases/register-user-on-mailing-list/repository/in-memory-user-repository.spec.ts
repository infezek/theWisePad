import { UserData } from '../../../entities/user-date'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User respository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)
    const user = await sut.findUserByEmail('any@mail.com')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repositoriy', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@mail.com'
    const sut = new InMemoryUserRepository(users)
    await sut.add({ name, email })
    const user = await sut.findUserByEmail(email)
    expect(user.name).toBe(name)
  })

  test('should return all users in the repository', async () => {
    const users: UserData[] = [
      {
        name: 'any_name',
        email: 'any@mail.com'
      },
      {
        name: 'second_name',
        email: 'second@mail.com'
      }
    ]

    const sut = new InMemoryUserRepository(users)
    const returndUsers = await sut.findAllUsers()
    expect(returndUsers.length).toBe(2)
  })
})
