import { useEffect, useState } from "react";
import { useWeather } from "../contexts/WeatherProvider";
import { isDayTime, weatherCodeColors } from "../helper";

function Wrapper({ children }) {
  const [colorStyle, setColorStyle] = useState("bg-blue-300  text-white");

  const {
    currentTime,
    currentWeatherCode,
    forecast,
    isLoadingCurrentTemperature,
  } = useWeather();

  useEffect(() => {
    // Only change color scheme when all data is available
    if (!isLoadingCurrentTemperature && currentWeatherCode && forecast?.[0]) {
      const { sunrise, sunset } = forecast[0];
      const isDay = isDayTime(currentTime, sunrise, sunset);

      // Determing day/night scheme
      const scheme = isDay ? "day" : "night";

      // Determine appropriate color scheme based on day/night
      const newColorStyle = weatherCodeColors[currentWeatherCode][scheme]
        ? weatherCodeColors[currentWeatherCode][scheme]
        : "bg-blue-300  text-white";
      setColorStyle(newColorStyle);
    }
  }, [currentTime, currentWeatherCode, forecast, isLoadingCurrentTemperature]);

  return (
    <div
      className={` ${colorStyle} p-5 backdrop-blur-md flex flex-col gap-5 h-[100dvh] min-h-fit transition-all duration-1000 ease-in-out `}
    >
      {children}
    </div>
  );
}

export default Wrapper;

// "bg-blue-300  text-white"

// // Check if forecast[0] exists before destructuring
// const { sunrise, sunset } = forecast?.[0] || {};

// // Check if sunrise and sunset are available and currentTime exists
// const isDay =
//   currentTime && sunrise && sunset
//     ? isDayTime(currentTime, sunrise, sunset)
//     : null;

// const colorScheme = isDay ? "day" : "night";

// // If `currentWeatherCode` is undefined, use default style
// const colourStyle = currentWeatherCode
//   ? weatherCodeColors[currentWeatherCode][colorScheme]
//   : "bg-blue-300 text-white"; // Default fallback if undefined
