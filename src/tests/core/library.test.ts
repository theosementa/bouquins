
import { Book } from "../domain/models/Book"

describe('Library Test', () => {
  let library: Library
  let book: Book

  beforeEach(() => {
    library = new Library()
    book = new Book('TestingBook', 2025)
  })

  test('addBook_shouldReturnOne', () => {
    library.add(book)
    expect(library.books.size).toBe(1)
  })

  test('removeBook_shouldReturnZero', () => {
    library.add(book)
    library.remove(book)
    expect(library.books.size).toBe(0)
  })

  test('removeBook_shouldThrowError', () => {
    expect(() => {
      library.remove(book)
    }).toThrow()
  })

})

