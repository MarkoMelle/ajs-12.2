import Buyable from '../domain/Buyable'

export default class Cart {
  private readonly _items: Buyable[] = []

  add (item: Buyable): void {
    this._items.push(item)
  }

  sum (): number {
    let sum = 0
    for (const item of this._items) {
      sum += item.price
    }
    return sum
  }

  sumDiscount (disc: number): number {
    let sum = 0
    for (const item of this._items) {
      sum += item.price
    }
    sum = sum - (sum * disc / 100)
    return sum
  }

  get items (): Buyable[] {
    return [...this._items]
  }
}
