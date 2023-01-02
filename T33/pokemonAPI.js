// Create API call from pokeapi
fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur/")
    .then(res => res.json()) //convert text into object using JSON
    .then((result) => {

        // print required outputs
        console.log("Name:", result.name)
        console.log("Weight:", result.weight)
        console.log("Abilities:", result.abilities)
    }),
    // error handling
    (error) => {
        console.log(error);
    }
