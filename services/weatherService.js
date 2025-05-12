import axios from "axios"
import { API_KEY, BASE_URL } from "../constants"

export const fetchLocations = async ({ cityName }) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${cityName}`
    )
    return response.data
  } catch (error) {
    console.error("Error fetching locations", error)
    // Return an empty array instead of null to prevent type errors
    return []
  }
}

export const fetchWeatherForecast = async ({ cityName, days }) => {
  try {
    // Replace with actual API endpoint
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${cityName}&days=${days}&aqi=no&alerts=no`
    )
    return response.data
  } catch (error) {
    console.error("Error fetching weather forecast", error)
    return null
  }
}
