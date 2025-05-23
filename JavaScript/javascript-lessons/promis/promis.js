// Create a promise that resolves or rejects randomly after 2 seconds
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Randomly choose true or false
    const isReady = [true, false][Math.floor(Math.random() * 2)];
    if (isReady) {
      resolve("Soup is ready");
    } else {
      reject("Soup is not ready");
    }
  }, 2000);
});

// Using .then and .catch to handle promise result
promise1
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

// Async function to fetch a random dog image
const getDog = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url); // wait for the fetch call
  const data = await response.json(); // parse JSON response
  console.log(data);
};

getDog();

// Async function to wait for promise1 and handle errors
const getSoup = async () => {
  try {
    const soup = await promise1; // wait for promise1 to resolve/reject
    console.log(soup);
  } catch (error) {
    console.log(error);
  }
};

getSoup();
