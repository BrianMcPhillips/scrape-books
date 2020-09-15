const request = require('./request.js');

describe('request function', () => {
  it('can make a request and return html text', () => {
    const html = await request();
    expect(html).toEqual(expect.stringContaining('All products'));
  });
});