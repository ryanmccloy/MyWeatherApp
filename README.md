# Weather App 🌦️

This is a responsive weather application built using **React** and **Vite**, styled with **Tailwind CSS**, and deployed on **Vercel**. The app allows users to search for any location and get real-time weather information, including the current temperature, sunrise and sunset times, and a 5-day weather forecast. The app utilizes the **Tomorrow.io Weather API** for weather data and **TimeAPI.io** to handle timezone data.

## Features

- **Search by location**: Users can search for any location worldwide to retrieve weather data.
- **Real-time weather**: Displays the current temperature for the searched location.
- **Sunrise and sunset times**: Shows today's sunrise and sunset times for the selected location.
- **5-day forecast**: Provides a 5-day forecast with daily high and low temperatures.
- **Responsive design**: The app is fully responsive and works on different screen sizes and devices.

## Technologies Used

- **React**: Front-end framework to build the user interface.
- **Vite**: Lightning-fast bundler and development server for modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vercel**: Hosting and deployment platform.
- **Tomorrow.io Weather API**: For fetching real-time weather data.
- **TimeAPI.io**: For fetching timezone data based on location.

## State Management

- The app uses the **Context API** to manage and share the state across components, which allows efficient data flow for the weather information throughout the app.

## How to Use

1. Enter a location in the search bar.
2. The app will fetch the current weather, including the temperature, sunrise and sunset times, and a 5-day forecast.
3. The 5-day forecast includes the high and low temperatures for each day.
