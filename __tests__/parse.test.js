const request = require('../lib/request');
const parse = require('../lib/parse');

describe('parse function', () => {
  it('returns an array of all books', async() => {
    const document = await request();
    const bookData = await parse(document);

    expect(bookData).toEqual(expect.arrayContaining([
      { title: 'Tipping the Velvet', 
        image: 'catalogue/tipping-the-velvet_999/index.html', 
        rating: 'One', 
        price: '£53.74', 
        inStock: true }

    ]));
  });
});
