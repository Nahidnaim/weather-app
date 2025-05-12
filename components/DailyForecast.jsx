import { WEATHER_IMAGES } from "@/constants"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { CalendarDaysIcon } from "react-native-heroicons/outline"

export const DailyForecast = ({ forecast }) => {
  return (
    <View className="mb-2 gap-3">
      <View className="flex-row items-center gap-2">
        <CalendarDaysIcon size={22} color="white" />
        <Text className="text-white text-lg">Daily Forecast</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View className="flex flex-row gap-4">
          {forecast?.forecastday?.map((item, index) => {
            const date = new Date(item.date)
            const options = { weekday: "long" }
            const dayName = date.toLocaleDateString("en-US", options)
            return (
              <View
                key={index}
                className="flex justify-center items-center w-32 rounded-3xl py-6 gap-2 bg-white/20 border border-gray-400"
              >
                <Image
                  source={WEATHER_IMAGES[item?.day?.condition?.text.trim()]}
                  className="w-16 h-16"
                />
                <Text className="text-white">{dayName}</Text>
                <Text className="text-white text-xl font-semibold">
                  {item?.day?.avgtemp_c}&#176;C
                </Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 5,
  },
})
