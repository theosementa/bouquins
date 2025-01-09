import { Book } from "../domain/models/Book"

describe('Library Test', () => {

  let library: Library

  beforeEach(() => {
    library = new Library()
  })

  test('addBook_shouldReturnOne', () => {
    const book = new Book('TestingBook', 2025)
    library.add(book)
    expect(library.books.size).toBe(1)
  })

})