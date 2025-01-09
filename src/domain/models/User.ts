import { Book } from "./Book"

export class User {
  name: string
  book?: Book

  constructor(name: string, book?: Book) {
    this.name = name
    this.book = book
  }
}