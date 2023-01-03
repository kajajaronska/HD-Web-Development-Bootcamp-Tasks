// Fetch url of a random GIF of a cat
async function catApiFunction() {
  let item = await fetch(
    "http://thecatapi.com/api/images/get?format=src&type=gif"
  );
  console.log(item.url); // log url of a gif
}

// Call the function
catApiFunction();
