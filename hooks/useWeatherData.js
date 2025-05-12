import NetInfo from "@react-native-community/netinfo"
import { debounce } from "lodash"
import { useCallback, useEffect, useMemo, useState } from "react"
import {
  fetchLocations,
  fetchWeatherForecast,
} from "../services/weatherService"
import { getData, storeData } from "../utils/asyncStorage"

// Cache management constants
const WEATHER_CACHE_KEY = "weather_cache"
const CACHE_EXPIRATION_TIME = 1000 * 60 * 60 * 2 // 2 hours

export const useWeatherData = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [locations, setLocations] = useState([])
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isOnline, setIsOnline] = useState(true)

  // Check network connectivity
  const checkNetworkConnectivity = async () => {
    const state = await NetInfo.fetch()
    setIsOnline(state.isConnected ?? false)
  }

  // Retrieve cached weather data
  const getCachedWeather = async () => {
    try {
      const cachedData = await getData(WEATHER_CACHE_KEY)

      if (
        cachedData &&
        cachedData.data &&
        Date.now() - cachedData.timestamp < CACHE_EXPIRATION_TIME
      ) {
        return cachedData.data
      }
      return null
    } catch (error) {
      console.error("Error retrieving cached weather", error)
      return null
    }
  }

  // Cache weather data
  const cacheWeatherData = async (data) => {
    try {
      await storeData(WEATHER_CACHE_KEY, {
        timestamp: Date.now(),
        data,
      })
    } catch (error) {
      console.error("Error caching weather data", error)
    }
  }

  // Handle location selection
  const handleLocation = async (location) => {
    setLocations([])
    setLoading(true)
    try {
      const data = await fetchWeatherForecast({
        cityName: location.name,
        days: 7,
      })

      if (data) {
        setWeather(data)
        await cacheWeatherData(data)
        await storeData("city", location.name)
      }
    } catch (error) {
      console.error("Error handling location", error)
    } finally {
      setLoading(false)
      setShowSearch(false)
    }
  }

  // Search locations
  const handleSearch = useCallback(async (value) => {
    if (value.length > 2) {
      try {
        const data = await fetchLocations({ cityName: value })
        setLocations(data)
      } catch (error) {
        console.error("Location search error", error)
        // Optionally use cached locations if available
      }
    }
  }, [])

  // Debounce search
  const handleTextDebounce = useMemo(
    () => debounce(handleSearch, 1200),
    [handleSearch]
  )

  // Fetch weather data with caching and offline support
  const fetchWeatherData = async () => {
    await checkNetworkConnectivity()

    try {
      // First, try to get cached data
      const cachedWeather = await getCachedWeather()

      if (!isOnline && cachedWeather) {
        // If offline and have cached data, use cache
        setWeather(cachedWeather)
        setLoading(false)
        return
      }

      // If online, fetch fresh data
      if (isOnline) {
        const myCity = await getData("city")
        const cityName = myCity || "Dhaka"

        const data = await fetchWeatherForecast({
          cityName,
          days: 7,
        })

        if (data) {
          setWeather(data)
          await cacheWeatherData(data)
        } else if (cachedWeather) {
          // Fallback to cached data if fetch fails
          setWeather(cachedWeather)
        }
      }
    } catch (error) {
      console.error("Error fetching weather data", error)
      // Try to get cached data in case of error
      const cachedWeather = await getCachedWeather()
      if (cachedWeather) {
        setWeather(cachedWeather)
      }
    } finally {
      setLoading(false)
    }
  }

  // Initial data fetch
  useEffect(() => {
    fetchWeatherData()

    // Set up network connectivity listener
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected ?? false)
      if (state.isConnected) {
        fetchWeatherData() // Refresh data when back online
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return {
    showSearch,
    setShowSearch,
    locations,
    weather,
    loading,
    isOnline,
    handleLocation,
    handleTextDebounce,
  }
}
