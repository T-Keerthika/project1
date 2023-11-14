function fetchData()
{
  let city = document.getElementById('input').value
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=2fd478e42d73513557d5a40307bc1cc0`)
  .then(res=>res.json())
  .then(res=>getGeoDetail(res))
}

function getGeoDetail(res)
{
  let arr = Object.entries(res)
  let lon = (arr[0][1].lon)
  let lat = (arr[0][1].lat)
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2fd478e42d73513557d5a40307bc1cc0`)
  .then(res=>res.json())
  .then(res=>display(res))
}

function display(res)
{
  let data = Object.entries(res)
  let description = data[1][1][0].description
  let temp = data[3][1].temp
  temp = (temp - 273.15).toFixed(2)
  let city = document.getElementById('input').value
  document.getElementById("city").innerHTML = "City : "+city
  document.getElementById("temp").innerHTML = "Temperature : "+temp;
  document.getElementById("description").innerHTML = "Description : "+description


}

/* fetchData():

This function is called when you want to fetch weather data based on a user-provided city input. It retrieves the city input from an HTML input element with the id "input".
It makes a GET request to the OpenWeatherMap Geo API, which is used to obtain geographical data for the provided city.
Once the response is received, it calls the getGeoDetail() function and passes the response as an argument.
getGeoDetail(res):
This function is responsible for extracting latitude and longitude information from the response obtained from the OpenWeatherMap Geo API.
It converts the response into an array of key-value pairs using Object.entries() and then extracts the latitude and longitude values from the response.
After obtaining the latitude and longitude, it makes another GET request to the OpenWeatherMap Weather API to fetch weather data for the specified location.
Once the weather data is received, it calls the display() function and passes the response as an argument.
display(res):
This function is used to display the weather information on the webpage.
It converts the weather data response into an array of key-value pairs using Object.entries().
It extracts the weather description and temperature values from the response.
The temperature is converted from Kelvin to Celsius by subtracting 273.15 and then rounded to two decimal places using toFixed(2).
It retrieves the city name from the input element with the id "input".
Finally, it updates the content of HTML elements with ids "city", "temp", and "description" to display the city name, temperature, and weather description, respectively. */