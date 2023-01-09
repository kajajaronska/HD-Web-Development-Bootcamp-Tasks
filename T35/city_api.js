// Create object to hold information requested using API: population (GeoDB API), elevation (GeoDB API), currentTemperature (weather API)
// ID: 123214

let city = {
  city_name: "Johannesburg",
  ID: "131204",
  population: "",
  elevation: "",
  latitude: "",
  longitude: "",
  currentTemperature: "",
};


// let cityName = "New York City";

// API details including key

let urlGeoDB = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${city.ID}`;
let urlWeather;

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
// ADD TRY AND CATCH TO CAPTURE ERRORS 🔥
// Try adding another fetch to request city ID first 🔥

async function fetchCityDetails() {
  // create a variable with fetch method requesting city details from ulrGeoDB; 
  const cityDetailsResponse = await fetch(urlGeoDB, optionsGeoDB); // use await keyword - script won't run until this request is complete
  const cityDetails = await cityDetailsResponse.json(); // parsing data from api request

  // assigning received details to city object
  city.population = cityDetails.data.population; 
  city.elevation = cityDetails.data.elevationMeters;
  city.latitude = cityDetails.data.latitude.toString();
  city.longitude = cityDetails.data.longitude.toString();

  // updating ulr string with received details for lon and lat
  urlWeather = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${city.longitude}&lat=${city.latitude}`;

  // delaying the script to avoid making simultaneous API requests resulting in error
  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log("whoop");
  console.log(city);

   // create a variable with fetch method requesting weather details from urlWeather; 
  const weatherDetailsResponse = await fetch(urlWeather, optionsWeather);
  const weatherDetails = await weatherDetailsResponse.json(); // parsing data

  console.log(weatherDetails);

}

// calling the function
fetchCityDetails();


console.log(city);
