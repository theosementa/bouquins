import { Book } from "../../../domain/models/Book"
import { User } from "../../../domain/models/User"

describe('Book', () => {
  let book: Book

  beforeEach(() => {
    book = new Book('Theo Book', 2025)
  })

  test('reserve_shouldReserveBook', () => {
    const user = new User('Théo')
    book.reserve(user)
    expect(book.isAvailable).toBe(false)
  })

  test('reserve_shouldNotReserveBook', () => {
    const user = new User('Théo')
    expect(book.reserve(user)).toThrow()
  })

})