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
let urlWeather = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${city.longitude}&lat=${city.latitude}`;

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
// ADD TRY AND CATCH TO CAPTURE ERRORS

async function fetchCityDetails() {
  const cityDetailsResponse = await fetch(urlGeoDB, optionsGeoDB);
  const cityDetails = await cityDetailsResponse.json();

  city.population = cityDetails.data.population;
  city.elevation = cityDetails.data.elevationMeters;
  city.latitude = cityDetails.data.latitude.toString();
  city.longitude = cityDetails.data.longitude.toString();

  urlWeather = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${city.longitude}&lat=${city.latitude}`;

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log("whoop");
  console.log(city);

  const weatherDetailsResponse = await fetch(urlWeather, optionsWeather);
  const weatherDetails = await weatherDetailsResponse.json();

  console.log(weatherDetails);

}

fetchCityDetails();


console.log(city);
