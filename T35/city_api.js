// Free plan on RapidAPI limits result to 5 therefore I chose one of the results - "Andorra la Vella";

// API details including key

let cityName = "New York City";

const url1 = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}`;

const url2 = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityResults.city_ID}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9455bd8bbfmshca9af748330598fp1d0af3jsn6c0a653f823f',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

// Create object to hold information requested using API: population (GeoDB API), elevation (GeoDB API), currentTemperature (weather API)



// ID: 123214

let cityResults = {
    city_name: '',
    city_ID: '123214',
    population: '',
    elevation: '',
    currentTemperature: ''
}

// Create a function with API requests

async function fetchCityDetails() {
  const response = await fetch(url,options);
  const cityDetails = await response.json();

  console.log(cityDetails);
  
  return cityDetails;
}

fetchCityDetails().then(cityDetails => {
  cityDetails;
  console.log(cityDetails);
})

// Fetch details from the GeoDB API and assign to population and elevation cityResults keys; handle error





// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => {
//         cityResults.city_name = json.data[0].name;
//         cityResults.city_ID = json.data[0].id;
//         cityResults.population = json.data[0].population;
//         console.log(json)})
// 	.catch(err => console.error('error:' + err));



// fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityResults.city_ID}`,options)
// .then(res => res.json())
// 	.then(json => {
//         console.log(json)})
// 	.catch(err => console.error('error:' + err));


// Fetch details from the weather API and assign to currentTemperature variable



// Log the output for the user

console.log(cityResults)


