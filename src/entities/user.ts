import { UserData } from './user-date'
import { Either, left } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { Email } from './email'
import { InvalidNameError } from './errors/invalid-name-error'
import { Name } from './name'

export class User {
  static create(
    userData: UserData
  ): Either<InvalidEmailError | InvalidNameError, User> {
    const nameOrError = Name.create(userData.name)
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError())
    }

    const emailOrError = Email.create(userData.email)

    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError())
    }
  }
}
