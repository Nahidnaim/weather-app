import { WEATHER_IMAGES } from "@/constants/"
import { Image, Text, View } from "react-native"

export const CurrentWeather = ({ current }) => {
  return (
    <View className="flex flex-row justify-center items-center gap-5">
      <View>
        <Text className="text-white text-center text-xl mb-4">
          {current?.condition.text}
        </Text>
        <Text className="text-white text-center text-6xl font-bold ">
          {current?.temp_c}&#176;C
        </Text>
        <Text className="text-gray-300 text-center text-xl mt-3">
          Feels like {current?.feelslike_c}&#176;C
        </Text>
      </View>
      <View>
        <Image
          source={WEATHER_IMAGES[current?.condition?.text.trim()]}
          className="w-44 h-44"
        />
      </View>
    </View>
  )
}
