// create API call

fetch("https://www.affirmations.dev/")
    .then(res => res.json()) // convert sent text into an object usong JSON
    .then((result)=> {
        console.log(result.affirmation) // access value of the affirmation key
    }),
    // error handling
    (error) => {
        console.log(error);
    }

