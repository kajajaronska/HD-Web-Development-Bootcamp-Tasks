// Create object to hold information requested using API: population (GeoDB API), elevation (GeoDB API), currentTemperature (weather API)
// ID: 123214

let city = {
  city_name: 'Johannesburg',
  ID: '131204',
  population: '',
  elevation: '',
  latitude: '',
  longitude: '',
  currentTemperature: ''
}

// hard code city name and city ID (google)
// change second API to the weather API or delay second request?? 

let cityName = "New York City";

// API details including key
// const url1 = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityName}`;

const urlGeoDB = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${city.ID}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9455bd8bbfmshca9af748330598fp1d0af3jsn6c0a653f823f',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};



// Create a function with API requests

async function fetchCityDetails() {
  const[cityDetailsResponse, cityWeather] = await Promise.all([
    fetch(urlGeoDB,options),
    // fetch(url2,options)
    
  ])

  const cityDetails = await cityDetailsResponse.json();
  // const cityDetails2 = await cityDetailsResponse2.json();
  
  return [cityDetails];
}

fetchCityDetails().then(([cityDetails]) => {

    city.population = cityDetails.data.population;
    city.elevation = cityDetails.data.elevationMeters;
    city.latitude = cityDetails.data.latitude;
    city.longitude = cityDetails.data.longitude;
  
  console.log(cityDetails);
}).catch(err => console.error('error:' + err));


console.log(city)


