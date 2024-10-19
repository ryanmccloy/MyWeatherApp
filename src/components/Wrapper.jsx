import { useEffect, useState } from "react";
import { useWeather } from "../contexts/WeatherProvider";
import { isDayTime } from "../../utils/helper";
import { weatherCodeColors } from "../../utils/constants";

function Wrapper({ children }) {
  const [colorStyle, setColorStyle] = useState(
    "bg-[#a3cef1]  text-[#274c77] border-[#a3cef1]"
  );

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
        : "bg-[#a3cef1]  text-[#274c77] border-[#a3cef1]";
      setColorStyle(newColorStyle);
    }
  }, [currentTime, currentWeatherCode, forecast, isLoadingCurrentTemperature]);

  return (
    <div
      className={` ${colorStyle} p-5 backdrop-blur-md flex flex-col gap-5 h-[100dvh] min-h-fit transition-all duration-1000 ease-in-out `}
      style={{
        backgroundColor: colorStyle.backgroundColor,
        color: colorStyle.textColor,
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
