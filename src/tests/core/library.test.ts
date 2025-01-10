
import { Library } from "../../core/Library"
import { Book } from "../../domain/models/Book"
import { User } from "../../domain/models/User"

describe('Library Test', () => {
  let library: Library
  let book: Book
  let user: User

  beforeEach(() => {
    library = new Library()
    book = new Book('TestingBook', 2025)
    user = new User('Théo')
  })

  // Add
  test('add new book', () => {
    library.add(book)
    expect(library.books.length).toBe(1)
  })

  // Remove
  test('remove exiting book', () => {
    library.add(book)
    library.remove(book)
    expect(library.books.length).toBe(0)
  })

  test('remove non-exitent book', () => {
    expect(() => {
      library.remove(book)
    }).toThrow()
  })

  // Reserve
  test('reserve book', () => {
    library.reserve(book, user)
    expect(book.isAvailable).toBe(false)
  })

  test('reserve unavailable book', () => {
    book.isAvailable = false
    expect(() => {
      library.reserve(book, user)
    }).toThrow();
  })

  test('reserve book when user has book', () => {
    library.reserve(book, user)
    expect(() => {
      library.reserve(book, user)
    }).toThrow();
  })

  // Return
  test('return reserved book', () => {
    library.reserve(book, user)
    library.return(book, user)
    expect(book.isAvailable).toBe(true)
  })  

  test('return without reserve', () => {
    expect(() => {
      library.return(book, user)
    }).toThrow();
  })

})

