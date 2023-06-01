export class Giphy {
  constructor(data) {
    this.id = data.id
    this.url = data.images.original.url
    this.title = data.title
  }
}