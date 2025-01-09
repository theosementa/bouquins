import { Book } from "../../../domain/models/Book"
import { User } from "../../../domain/models/User"

describe('Book', () => {
  let book: Book
  let user: User

  beforeEach(() => {
    user = new User('Théo')
    book = new Book('Theo Book', 2025)
  })

  test('reserve_shouldReserveBook', () => {
    book.reserve(user)
    expect(book.isAvailable).toBe(false)
  })

  test('reserve_shouldNotReserveBook', () => {
    book.isAvailable = false
    expect(() => {
      book.reserve(user)
    }).toThrow();
  })

  test('return_shouldReturnBook', () => {
    book.reserve(user)
    book.return(user)
    expect(book.isAvailable).toBe(true)
  })  

  test('return_shouldNotReturnBook', () => {
    expect(() => {
      book.return(user)
    }).toThrow();
  })


})