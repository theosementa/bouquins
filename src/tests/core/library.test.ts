
import { Library } from "../../core/Library"
import { Book } from "../../domain/models/Book"

describe('Library Test', () => {
  let library: Library
  let book: Book

  beforeEach(() => {
    library = new Library()
    book = new Book('TestingBook', 2025)
  })

  test('add new book', () => {
    library.add(book)
    expect(library.books.length).toBe(1)
  })

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

})

