import AsyncStorage from "@react-native-async-storage/async-storage"

// Store data in AsyncStorage
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (error) {
    console.error(`Error storing data for key ${key}:`, error)
  }
}

// Retrieve data from AsyncStorage
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.error(`Error retrieving data for key ${key}:`, error)
    return null
  }
}

// Remove data from AsyncStorage
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing data for key ${key}:`, error)
  }
}

// Clear all data from AsyncStorage
export const clearAllData = async () => {
  try {
    await AsyncStorage.clear()
  } catch (error) {
    console.error("Error clearing all data:", error)
  }
}
