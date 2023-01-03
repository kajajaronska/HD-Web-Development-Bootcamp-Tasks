// The group that writes all your learning content is fondly known as the
// “content cats”. Because of this, it’d be a no-brainer to have you create a
// website that will randomly generate GIFs of cats!
// ○ Use the following API URL to fetch a random gif of a cat:
// http://thecatapi.com/api/images/get?format=src&type=gif
// ○ Ensure that you make use of async/await and not a promise
// when fetching the API.
// ○ Please only output the image URL in the console.

// async function apiFunctionContentCats() {
//   let cat = await fetch(
//     "http://thecatapi.com/api/images/get?format=src&type=gif"
//   );
//   console.log(cat.url);
// }

// apiFunctionContentCats();

// console.log("hello");

// async function apiFunction() {
//     let response = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");
//     console.log(response)
//     console.log("---------------------")
//     let url = await response.json();
//     console.log(url)
//     }

fetch("http://thecatapi.com/api/images/get?format=src&type=gif")
  .then(response => console.log(response[0].url));
  (error) => {
    console.log(error);
  };
