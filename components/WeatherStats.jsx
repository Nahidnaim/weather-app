import DropIcon from "@/assets/images/icons/drop.png"
import SunIcon from "@/assets/images/icons/sun.png"
import WindIcon from "@/assets/images/icons/wind.png"
import { Image, Text, View } from "react-native"

export const WeatherStats = ({ current, forecast }) => {
  return (
    <View className="flex-row justify-around bg-white/20 border border-gray-400 p-4 rounded-2xl">
      <View className="flex items-center gap-3">
        <Image
          source={WindIcon}
          className="w-6 h-6"
          style={{ width: 20, height: 20 }}
        />
        <Text className="text-white font-bold text-xl">
          {current?.wind_kph}km/h
        </Text>
        <Text className="text-white text-base">Wind</Text>
      </View>
      <View className="flex items-center gap-3">
        <Image
          source={DropIcon}
          className="w-6 h-6"
          style={{ width: 20, height: 20 }}
        />
        <Text className="text-white font-bold text-xl">
          {current?.humidity}%
        </Text>
        <Text className="text-white text-base">Humidity</Text>
      </View>
      <View className="flex items-center gap-3">
        <Image
          source={SunIcon}
          className="w-6 h-6"
          style={{ width: 20, height: 20 }}
        />
        <Text className="text-white font-bold text-xl">
          {forecast?.forecastday[0]?.astro?.sunrise}
        </Text>
        <Text className="text-white text-base">Sunrise</Text>
      </View>
    </View>
  )
}
