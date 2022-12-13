import Cart from '../service/Cart'
import Book from '../domain/Book'
import MusicAlbum from '../domain/MusicAlbum'

test('new card should be empty', () => {
  const cart = new Cart()
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))

  expect(cart.items).toEqual([new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225),new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900)])
  expect(cart.sum()).toBe(2900)
  expect(cart.sumDiscount(15)).toBe(2465)
})
