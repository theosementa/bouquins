import { Book } from "../domain/models/Book";

export class Library {

  books: Book[] = []

  add(book: Book) {
    this.books.push(book)
  }

  remove(book: Book) {
    if (!this.books.includes(book)) {
      throw new Error('We can remove a book not in the library ...')
    }

    this.books = this.books.filter((bookIn) => bookIn !== book )
  }
}