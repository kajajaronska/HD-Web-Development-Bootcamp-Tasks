// Pseudocode:
// Create prompt for the user to enter name of the city | For development purposes create a variable with a static city name i.e. ""Aixovall". 
// Free plan on RapidAPI limits result to 5 therefore I chose one of the results as a userCityChoice

// let userCityChoice = prompt("Please enter name of the city:")

let userCityChoice = "Andorra la Vella";

// Create variables to hold information requested using API: population (GeoDB API), elevation (GeoDB API), currentTemperature (weather API)

let cityResults = {
    city_name: '',
    city_ID: '',
    population: '',
    elevation: '',
    currentTemperature: ''
}

// Fetch details from the GeoDB API and assign to population and elevation variables; handle error

// const fetch = require('node-fetch');

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9455bd8bbfmshca9af748330598fp1d0af3jsn6c0a653f823f',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => {
        cityResults.city_name = json.data[0].city;
        console.log(json)})
	.catch(err => console.error('error:' + err));



// Fetch details from the weather API and assign to currentTemperature variable
// Log the output for the user


