
export class Book {
  name: string
  releaseYear: number
  isAvailable: boolean

  constructor(name: string, releaseYear: number, isAvailable: boolean = true) {
    this.name = name
    this.releaseYear = releaseYear
    this.isAvailable = isAvailable
  }

}