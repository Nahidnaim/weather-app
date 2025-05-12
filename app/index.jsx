import { Image, SafeAreaView, Text, View } from "react-native"
import * as Progress from "react-native-progress"

// Import background image
import BgImage from "../assets/images/background.jpg"

// Import custom hooks and components
import { CurrentWeather } from "../components/CurrentWeather"
import { DailyForecast } from "../components/DailyForecast"
import { LocationHeader } from "../components/LocationHeader"
import { SearchBar } from "../components/SearchBar"
import { WeatherStats } from "../components/WeatherStats"
import { useWeatherData } from "../hooks/useWeatherData"

export default function WeatherScreen() {
  // Use the generic hook with our custom weather data type
  const {
    showSearch,
    setShowSearch,
    locations,
    weather,
    loading,
    handleLocation,
    handleTextDebounce,
  } = useWeatherData()

  // Loading state
  if (loading) {
    return (
      <View className="flex-1 flex-row justify-center items-center">
        <Progress.CircleSnail thickness={10} size={140} color="lightgray" />
      </View>
    )
  }

  // Handle case where weather data might be null
  if (!weather) {
    return (
      <View className="flex-1 flex-row justify-center items-center bg-gray-800">
        <Text className="text-white text-2xl">No weather data available</Text>
      </View>
    )
  }

  const { current, location, forecast } = weather

  return (
    <View className="flex-1 relative">
      {/* Background Image */}
      <Image
        blurRadius={70}
        source={BgImage}
        className="absolute w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />

      <SafeAreaView className="flex flex-1 mx-5">
        {/* Search Bar */}
        <SearchBar
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          locations={locations}
          handleTextDebounce={handleTextDebounce}
          handleLocation={handleLocation}
        />

        <View className="flex justify-around flex-1 mt-4 mb-2">
          {/* Location Header */}
          {location && (
            <LocationHeader
              location={{
                name: location.name,
                country: location.country || "",
                localtime: location.localtime,
              }}
            />
          )}

          {/* Current Weather */}
          {current && <CurrentWeather current={current} />}

          {/* Weather Stats */}
          {current && forecast && (
            <WeatherStats current={current} forecast={forecast} />
          )}
        </View>

        {/* Daily Forecast */}
        {forecast && <DailyForecast forecast={forecast} />}
      </SafeAreaView>
    </View>
  )
}
