const { taskQueue } = require('./queue.js');

taskQueue.process(5, './lib/worker.js');
