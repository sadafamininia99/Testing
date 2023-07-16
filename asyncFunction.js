// asyncFunction.js
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data successfully fetched');
      }, 2000);
    });
  }
  
  async function asyncFunction() {
    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }
  
  module.exports = asyncFunction;
  