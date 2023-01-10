// Create object to hold information requested using API: population (GeoDB API), elevation (GeoDB API), currentTemperature (weather API)
// ID: 123214

let city = {
  city_name: "Johannesburg",
  ID: "",
  population: "",
  elevation: "",
  latitude: "",
  longitude: "",
  currentTemperature: "",
};

// API details including key

let urlGeoDB_ID = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=ZA&namePrefix=${city.city_name}&types=CITY`;
let urlGeoDB,urlWeather;

const optionsGeoDB = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9455bd8bbfmshca9af748330598fp1d0af3jsn6c0a653f823f",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const optionsWeather = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9455bd8bbfmshca9af748330598fp1d0af3jsn6c0a653f823f",
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
  },
};

// Create async function with API requests
// ADD TRY AND CATCH TO CAPTURE ERRORS - HERE
// Try adding another fetch to request city ID first - HERE

async function fetchCityDetails() {
  // create a variable with fetch method requesting city ID details from urlGeoDB_ID
  const cityIDResponse = await fetch(urlGeoDB_ID, optionsGeoDB);
  const cityID = await cityIDResponse.json();

  // assigning received ID to the city object
  city.ID = cityID.data[0].id;

  // delaying the script to avoid making simultaneous API requests resulting in error
  await new Promise((resolve) => setTimeout(resolve, 1000));

// updating ulr string with received city ID
  urlGeoDB = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${city.ID}`;

  // create a variable with fetch method requesting city details from ulrGeoDB;
  const cityDetailsResponse = await fetch(urlGeoDB, optionsGeoDB); // use await keyword - script won't run until this request is complete
  const cityDetails = await cityDetailsResponse.json(); // parsing data from api request


  // assigning received details to the city object
  city.population = cityDetails.data.population;
  city.elevation = cityDetails.data.elevationMeters;
  city.latitude = cityDetails.data.latitude.toString();
  city.longitude = cityDetails.data.longitude.toString();

  // updating ulr string with received details for lon and lat
  urlWeather = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${city.longitude}&lat=${city.latitude}`;

  // delaying the script to avoid making simultaneous API requests resulting in error
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // create a variable with fetch method requesting weather details from urlWeather;
  // PLEASE NOTE THAT WEATHERBIT CAPPED ME AT 25 CALLS (see jpeg saved in the folder) - THEREFORE I USED A DIFFERENT API TO COMPLETE THE TASK

  // const weatherDetailsResponse = await fetch(urlWeather, optionsWeather); 
  
  const weatherDetailsResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&hourly=temperature_2m&current_weather=true`);
  const weatherDetails = await weatherDetailsResponse.json(); // parsing data

  // assigning received details to the city object
  city.currentTemperature = weatherDetails.current_weather.temperature;

    return [cityDetails, cityID, weatherDetails];
}

// calling the function
fetchCityDetails()
.then(()=> {
  console.log(`Your chosen city is: ${city.city_name}.\n\nPlease see more details below:\nID: ${city.ID}\nPopulation: ${city.population}\nElevation: ${city.elevation}m\nCurrent Temperature: ${city.currentTemperature}\u2103`);
})
.catch(err => {
  console.log(err);
})


