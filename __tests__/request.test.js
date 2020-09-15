const request = require('../lib/.gitKeep/request.js');

describe('request function', () => {
  it('can make a request and return html text', async() => {
    const document = await request();
    expect(document.querySelector('.action>h1').textContent).toEqual('All products');
  });
});
