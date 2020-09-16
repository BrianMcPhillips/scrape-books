const { taskQueue } = require('./queue.js');
setInterval(() => {
  taskQueue.add({ payload: ' I am data ' })
    .then(() => console.log('added'));
}, 200);
