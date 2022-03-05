import { UserData } from './user-date'
import { Either, left } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { Email } from './email'

export class User {
  static create(userData: UserData): Either<InvalidEmailError, User> {
    const emailOrError = Email.create(userData.email)

    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError())
    }
  }
}
