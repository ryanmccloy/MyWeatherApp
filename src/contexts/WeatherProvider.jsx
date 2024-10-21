import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { convertToLocalTimeZone, getLocalTimeZone } from "../../utils/helper";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [userInput, setUserInput] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  const [currentTemperature, setCurrentTemperature] = useState("");
  const [currentWeatherCode, setCurrentWeatherCode] = useState("");
  const [forecast, setForecast] = useState([]);
  const [isLoadingCurrentTemperature, setIsLoadingCurrentTemperature] =
    useState(null);
  const [isLoadingForecast, setIsLoadingForecast] = useState(null);

  // Fetch Current Weather
  useEffect(() => {
    const fetchCurrentWeather = async () => {
      setIsLoadingCurrentTemperature(true);

      try {
        const response = await fetch(`/api/getWeather?location=${userInput}`);

        if (!response.ok) {
          const errorData = await response.json();

          toast.error(errorData.message, {
            duration: 3000,
          });

          console.error("Error from serverless function:", errorData.message);
          throw new Error(
            `HTTP error! Status: ${response.status}, Message: ${errorData.message}`
          );
        }

        const data = await response.json();
        const { temperature } = data.data.values;
        const { weatherCode } = data.data.values;
        const { lat, lon } = data.location;
        const { time } = data.data;
        const timeZone = await getLocalTimeZone(lat, lon);

        setCurrentTemperature(Math.round(temperature));
        setCurrentWeatherCode(weatherCode);
        setCurrentTime(convertToLocalTimeZone(timeZone, time));
        setIsLoadingCurrentTemperature(false);
      } catch (err) {
        console.error(
          "Error fetching current weather from serverless function",
          err.message
        );
      }
    };

    if (userInput) {
      fetchCurrentWeather();
    }
  }, [userInput]);

  // Fetch Upcoming Forecast
  useEffect(() => {
    if (!userInput) {
      console.log("Waiting for userInput...");
      return;
    }

    const fetchForecast = async () => {
      setForecast([]);
      setIsLoadingForecast(true);

      try {
        const response = await fetch(`/api/getForecast?location=${userInput}`);

        if (!response.ok) {
          const errorMessage =
            response.status === 429
              ? "Too many requests! Please come back later :("
              : "Error fetching weather forecast! Please make sure you have entered a valid location";

          console.error("Fetch Forecast Error", errorMessage);

          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const { daily } = data.timelines;
        const { lat, lon } = data.location;
        const timeZone = await getLocalTimeZone(lat, lon);

        daily.forEach((day) => {
          setForecast((forecast) => [
            ...forecast,
            {
              minTemp: Math.round(day.values.temperatureMin),
              maxTemp: Math.round(day.values.temperatureMax),
              AvgTemp: Math.round(day.values.temperatureAvg),
              sunrise: convertToLocalTimeZone(timeZone, day.values.sunriseTime),
              sunset: convertToLocalTimeZone(timeZone, day.values.sunsetTime),
              weatherCodeMax: day.values.weatherCodeMax,
            },
          ]);
        });

        setIsLoadingForecast(false);
      } catch (err) {
        console.error(
          "Error fetching weather forecast from serverless function",
          err
        );
      }
    };

    if (userInput) {
      fetchForecast();
    }
  }, [userInput]);

  return (
    <WeatherContext.Provider
      value={{
        setUserInput,
        userInput,
        currentTemperature,
        currentWeatherCode,
        forecast,
        isLoadingCurrentTemperature,
        isLoadingForecast,
        currentTime,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  return useContext(WeatherContext);
};

export default WeatherProvider;
