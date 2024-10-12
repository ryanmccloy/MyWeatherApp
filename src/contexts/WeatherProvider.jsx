import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [userInput, setUserInput] = useState("");
  const [currentTemperature, setCurrentTemperature] = useState("");
  const [forecast, setForecast] = useState([]);

  // Fetch Current Weather
  useEffect(() => {
    const API_URL = `https://api.tomorrow.io/v4/weather/realtime?location=${userInput}&apikey=`;

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
        setCurrentTemperature(Math.round(temperature));
        console.log("current", temperature);
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
        setForecast(data);
        console.log("Future", data);
      } catch (err) {
        console.error("Error fetching weather forecast", err);
      }
    };

    if (userInput) {
      fetchForecast();
    }
  }, [userInput]);

  return (
    <WeatherContext.Provider value={{ setUserInput, currentTemperature }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  return useContext(WeatherContext);
};

export default WeatherProvider;

// destructure foreacast and place in state
// maybe loop over the foecast and push relevant info into an array?
// map over array to dispaly the card ?
// Pass the weather into the components
// handle icon based on weather
