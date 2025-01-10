import { Book } from "../domain/models/Book";
import { User } from "../domain/models/User";

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

  reserve(book: Book, user: User) {
    if (user.book != null) {
      throw new Error("You already have a book");
    }

    if (!book.isAvailable) {
      throw new Error("Book already reserved");
    }

    user.book = book
    book.isAvailable = false
  }

  return(book: Book, user: User) {
    if (user.book === null) {
      throw new Error(`Bro you don't have a book...`)
    }

    user.book = null
    book.isAvailable = true
  }
}