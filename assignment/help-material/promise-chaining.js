
// Promise Chaining 

const fetchUrl1 = () => {
  return new Promise(async (resolve, reject) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
      const res = await fetch(url);
      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const fetchUrl2 = () => {
  return new Promise(async (resolve, reject) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
      const res = await fetch(url);
      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const fetchUrl3 = () => {
  return new Promise(async (resolve, reject) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
      const res = await fetch(url);
      const data = await res.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

// Chaining the promises
fetchUrl1()
  .then(data1 => {
    console.log('Data from URL 1:', data1);
    return fetchUrl2();
  })
  .then(data2 => {
    console.log('Data from URL 2:', data2);
    return fetchUrl3();
  })
  .then(data3 => {
    console.log('Data from URL 3:', data3);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });