const parse = document => {
  const allBookData = [...document.querySelectorAll('.product_pod')];

  const singleBookData = allBookData.map(book => {
    return {
      title: book.querySelector('h3>a').getAttribute('title'),
      image: book.querySelector('.image_container>a').getAttribute('href'),
      rating: book.querySelector('.star-rating').getAttribute('class').split(' ')[1],
      price: book.querySelector('.price_color').textContent,
      inStock: book.querySelector('.instock').textContent.includes('In stock') ? true : false
    };
});
    return singleBookData;
  };


module.exports = parse;