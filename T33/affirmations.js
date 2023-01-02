// Create API call

fetch("https://www.affirmations.dev/")
    .then(res => res.json())
    .then((result)=> {
        console.log(result.affirmation)
    }),
    (error) => {
        console.log(error);
    }

