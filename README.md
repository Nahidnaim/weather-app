# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## UI Layer:

- app/\_layout: file based routing in expo, main layout file
- app/index: main UI file
- components: Reusable UI components
  - SearchBar
    - Search input to search for location
    - Select location to display data in UI components
  - LocationHeader render following data:
    - Current location
    - Current date
  - CurrentWeather render following data:
    - Current condition text
    - Current temperature in celcius
    - Current feels like
  - WeatherStats
    - Current wind
    - Current humidity
    - Current day's sunrise
  - Daily Forecast
    - Icon represents: Condition of the day
    - Day name
    - Temperature of that day

## State Layer:

- hooks: useWeatherData hook to handle weather data

## Data layers

weatherService:

- fetch data from external weather API
- Handles API requests and responses
  asyncStorage
- Persists cached weather data
- stores default/recent locations

## Data Flow

1. App starts with a default location. E.g: Dhaka
2. User can search and select a new location
3. useWeatherData hook manages:
   - fetching weather data
   - caching results
   - handling network connectivity
4. UI components render retrieved data

## Potential Enhancements:

1. Add more robust error handling
2. Implement geolocation for current location
3. Enhance caching mechanisms
