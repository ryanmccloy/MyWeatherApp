import { waveform } from "ldrs";

import Wrapper from "./components/Wrapper";
import LocationSearch from "./components/LocationSearch";
import CurrentDayWeather from "./components/CurrentDayWeather";
import CurrentDayOverview from "./components/CurrentDayOverview";
import WeatherForecast from "./components/WeatherForecast";
import { useWeather } from "./contexts/WeatherProvider";

function App() {
  const { isLoadingCurrentTemperature, isLoadingForecast } = useWeather();

  waveform.register();

  return (
    <Wrapper>
      <LocationSearch />
      {isLoadingCurrentTemperature || isLoadingForecast ? (
        <div className="h-full w-full flex justify-center items-center">
          <l-waveform color="white" />
        </div>
      ) : (
        <>
          <CurrentDayWeather />
          <CurrentDayOverview />
          <WeatherForecast />
        </>
      )}
    </Wrapper>
  );
}

export default App;
