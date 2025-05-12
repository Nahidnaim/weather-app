import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { MagnifyingGlassIcon, MapPinIcon } from "react-native-heroicons/outline"

export const SearchBar = ({
  showSearch,
  locations,
  setShowSearch,
  handleTextDebounce,
  handleLocation,
}) => {
  return (
    <View style={{ height: "7%" }} className="relative z-50 mt-3">
      <View
        className="flex-row items-center justify-end rounded-full p-1"
        style={{
          backgroundColor: showSearch
            ? "rgba(255, 255, 255, 0.3)"
            : "transparent",
        }}
      >
        {showSearch && (
          <TextInput
            onChangeText={handleTextDebounce}
            placeholder="Search city"
            placeholderTextColor="lightgray"
            className="pl-6 h-10 flex-1 pb-1 text-base text-white"
          />
        )}

        <TouchableOpacity
          className="p-3 rounded-full bg-white/30"
          onPress={() => setShowSearch(!showSearch)}
        >
          <MagnifyingGlassIcon color="white" size="25" />
        </TouchableOpacity>
      </View>
      {locations.length > 0 && showSearch && (
        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
          {locations.map((location, index) => {
            const showBorder = index + 1 !== locations.length
            const borderClass = showBorder ? "border-b-2 border-b-gray-400" : ""
            return (
              <TouchableOpacity
                onPress={() => handleLocation(location)}
                key={index}
                className={`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}
              >
                <MapPinIcon color="gray" size="20" />
                <Text className="text-dark text-lg ml-2">
                  {location?.name}, {location?.country}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      )}
    </View>
  )
}
