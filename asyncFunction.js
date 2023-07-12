// asyncFunction.js
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data successfully fetched');
      }, 2000);
    });
  }
  
  async function asyncFunction() {
    const data = await fetchData();
    return data;
  }
  

  
  module.exports = asyncFunction;
  