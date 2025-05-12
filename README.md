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

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## UI Layer:

- app/\_layout: file based routing in expo, main layout file
- app/index: main UI file
- components: Reusable UI components

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
