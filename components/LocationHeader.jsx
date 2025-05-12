import { formatDate } from "@/utils/dateFormatter"
import { Text, View } from "react-native"
import { CalendarDaysIcon, MapPinIcon } from "react-native-heroicons/solid"

export const LocationHeader = ({ location }) => {
  return (
    <View className="gap-1">
      <View className="flex-row items-center gap-2">
        <MapPinIcon color="lightgray" size="20" />
        <Text className="text-white text-center text-3xl font-bold">
          {location?.name}, {location?.country}
        </Text>
      </View>
      <View className="flex-row items-center gap-2">
        <CalendarDaysIcon color="lightgray" size="20" />
        <Text className="text-lg font-semibold text-gray-300">
          {formatDate(location?.localtime)}
        </Text>
      </View>
    </View>
  )
}
