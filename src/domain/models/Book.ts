import { User } from "./User"

export class Book {
  name: string
  releaseYear: number
  isAvailable: boolean

  constructor(name: string, releaseYear: number, isAvailable: boolean = true) {
    this.name = name
    this.releaseYear = releaseYear
    this.isAvailable = isAvailable
  }

  reserve(user: User) {
    if (!this.isAvailable) {
      throw new Error("Book already reserved");
    }

    user.books.push(this);
    this.isAvailable = false;
  }

}