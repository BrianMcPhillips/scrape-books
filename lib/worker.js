module.exports = job => { 
  console.log(`I am a worker, my job id is ${job.id}. You sent me this data: ${job.data}`);
  return Promise.resolve('done');
};
