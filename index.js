// index.js
console.log('COLIN WAS HERE!!');

// Simple function example
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet('World');
console.log(message);

// Export for use in other files
module.exports = { greet };