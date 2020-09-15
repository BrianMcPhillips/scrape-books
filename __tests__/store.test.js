const store = require('../lib/store.js');
const fs = require('fs');
const pool = require('../lib/utils/pool.js');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));

  });

  it('stores an array of objects into sql', async() => {
    const books = [
      { 
        title: 'Tipping the Velvet', 
        image: 'catalogue/tipping-the-velvet_999/index.html', 
        rating: 'One', 
        price: '£53.74', 
        inStock: true },
      {
        title: 'Random book',
        image: 'catalogue/tipping-the-velvet_999/index.html',
        rating: 'Two',
        price: '£85.99',
        inStock: false },
      {
        title: 'Another Random',
        image: 'catalogue/tipping-the-velvet_999/index.html',
        rating: 'Three',
        price: '£35.99',
        inStock: true }
    ];

    await store(books);
    const { rows } = await pool.query('SELECT * FROM books');
    expect(rows).toHaveLength(3);
  });
});
