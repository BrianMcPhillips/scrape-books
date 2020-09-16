const { taskQueue } = require('./queue.js');

taskQueue.process(5, `${__dirname}/worker.js`);
