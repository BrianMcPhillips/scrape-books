const { taskQueue } = require('./queue.js');

Promise.all([...Array(50)]
  .map((_, i) => taskQueue.add({ page: i + 1 })))
  .then(() => console.log('Page added'));
