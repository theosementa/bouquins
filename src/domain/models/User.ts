import { Book } from "./Book"

export class User {
  name: string
  book: Book | null

  constructor(name: string, book: Book | null = null) {
    this.name = name
    this.book = book
  }
}