import { UserData } from '../user-date'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User respository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@mail.com')
    expect(user).toBeNull()
  })

  test('should return user if it is found in the repositoriy', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@mail.com'
    const userRepo = new InMemoryUserRepository(users)
    await userRepo.add({ name, email })
    const user = await userRepo.findUserByEmail(email)
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

    const userRepo = new InMemoryUserRepository(users)
    const returndUsers = await userRepo.findAllUsers()
    expect(returndUsers.length).toBe(2)
  })
})
