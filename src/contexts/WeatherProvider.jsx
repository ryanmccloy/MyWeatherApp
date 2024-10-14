import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getLocalTimeZone } from "../helper";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [localTimezone, setLocalTimezone] = useState("");
  const [currentTemperature, setCurrentTemperature] = useState("");
  const [forecast, setForecast] = useState([]);
  const [isDay, setIsDay] = useState();
  const [isLoadingCurrentTemperature, setIsLoadingCurrentTemperature] =
    useState(true);
  const [isLoadingForecast, setIsLoadingForecast] = useState(true);

  // Fetch Current Weather
  useEffect(() => {
    const API_URL = `https://api.tomorrow.io/v4/weather/realtime?location=${userInput}&apikey=`;

    setIsLoadingCurrentTemperature(true);

    const fetchCurrentWeather = async () => {
      try {
        const response = await fetch(`${API_URL}${API_KEY}`);

        if (!response.ok) {
          const errorMessage =
            response.status === 429
              ? "Too many requests! Please come back later :("
              : "Error fetching weather forecast! Please make sure you have entered a valid location";

          toast.error(errorMessage, {
            duration: 3000,
          });

          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const { temperature } = data.data.values;
        const { lat, lon } = data.location;
        const { time } = data.data;
        const timezone = await getLocalTimeZone(lat, lon);
        if (timezone) {
          setLocalTimezone(timezone);
        }

        setCurrentTemperature(Math.round(temperature));
        setCurrentTime(time);
        setIsLoadingCurrentTemperature(false);
      } catch (err) {
        console.error("Error fetching weather forecast", err);
      }
    };

    if (userInput) {
      fetchCurrentWeather();
    }
  }, [userInput]);

  // Fetch Upcoming Forecast
  useEffect(() => {
    const API_URL = `https://api.tomorrow.io/v4/weather/forecast?location=${userInput}&apikey=`;

    const fetchForecast = async () => {
      setForecast([]);
      setIsLoadingForecast(true);

      try {
        const response = await fetch(`${API_URL}${API_KEY}`);

        if (!response.ok) {
          const errorMessage =
            response.status === 429
              ? "Too many requests! Please come back later :("
              : "Error fetching weather forecast! Please make sure you have entered a valid location";

          toast.error(errorMessage, {
            duration: 3000,
          });

          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("future", data);
        const { daily } = data.timelines;

        daily.forEach((day) => {
          setForecast((forecast) => [
            ...forecast,
            {
              minTemp: Math.round(day.values.temperatureMin),
              maxTemp: Math.round(day.values.temperatureMax),
              AvgTemp: Math.round(day.values.temperatureAvg),
              sunrise: new Date(day.values.sunriseTime)
                .toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
                .replace("am", "AM")
                .replace("pm", "PM"),
              sunset: new Date(day.values.sunsetTime)
                .toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
                .replace("am", "AM")
                .replace("pm", "PM"),
              weatherCode: day.values.weatherCodeMax,

              // Weather code day/night?
            },
          ]);
        });

        setIsLoadingForecast(false);
      } catch (err) {
        console.error("Error fetching weather forecast", err);
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
        currentTemperature,
        forecast,
        isLoadingCurrentTemperature,
        isLoadingForecast,
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

// Current weather code for main icon?
// handle icon based on weather code
// hamdle colour based on weather code

// weather code state based on current time (day / night)
// colour and icon rendered based on weather code

// convert current time to local time zone
// convert sunrise and sunset to local time zone
// compare current time to sunset/sunrise time to load icon
