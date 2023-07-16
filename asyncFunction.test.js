// asyncFunction.js
async function asyncFunction() {
  // Simulating data fetching
  const data = await fetchData();

  if (data === 'Error') {
    throw new Error('Error fetching data');
  }

  return data;
}

async function fetchData() {
  // Simulating an error during data fetching
  // Replace this with your actual data fetching logic
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating a data fetching error by returning 'Error'
      resolve('Data successfully fetched');
    }, 200);
  });
}

module.exports = asyncFunction;
