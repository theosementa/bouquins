import { Book } from "../../../domain/models/Book"
import { User } from "../../../domain/models/User"

describe('Book', () => {
  let book: Book
  let user: User

  beforeEach(() => {
    user = new User('Théo')
    book = new Book('Theo Book', 2025)
  })

  test('reserve book', () => {
    book.reserve(user)
    expect(book.isAvailable).toBe(false)
  })

  test('reserve unavailable book', () => {
    book.isAvailable = false
    expect(() => {
      book.reserve(user)
    }).toThrow();
  })

  test('reserve book when user has book', () => {
    book.reserve(user)
    expect(() => {
      book.reserve(user)
    }).toThrow();
  })

  test('return reserved book', () => {
    book.reserve(user)
    book.return(user)
    expect(book.isAvailable).toBe(true)
  })  

  test('return without reserve', () => {
    expect(() => {
      book.return(user)
    }).toThrow();
  })


})