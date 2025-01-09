import { Book } from "./Book"

export class User {
  name: string
  books: Book[]

  constructor(name: string, books: Book[] = []) {
    this.name = name
    this.books = books
  }
}