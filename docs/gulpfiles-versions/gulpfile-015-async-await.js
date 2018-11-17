// https://gulpjs.com/docs/en/getting-started/async-completion

/**
 * * Signal task completion
 * * -------------------------------------
 * * Using async/await
 * 
 * * When not using any of the previous options, you can define your task as an 
 * * async function, which wraps your task in a promise. This allows you to work 
 * * with promises synchronously using await and use other synchronous code.
 */

const fs = require('fs');

async function asyncAwaitTask() {
  const { version } = fs.readFileSync('package.json');
  console.log(version);
  await Promise.resolve('some result');
}

exports.default = asyncAwaitTask;