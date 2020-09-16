const request = require('./lib/request.js');
const parse = require('./lib/parse.js');
const store = require('./lib/store.js');


module.exports = job => { 
  console.log(`I am a worker, my job id is ${job.id}. I am going to scrape page: ${job.data.page}`);
  return request(job.data.page)
    .then(parse)
    .then(store);
};
