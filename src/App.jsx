import { waveform } from "ldrs";

import Wrapper from "./components/Wrapper";
import LocationSearch from "./components/LocationSearch";
import CurrentDayWeather from "./components/CurrentDayWeather";
import CurrentDayOverview from "./components/CurrentDayOverview";
import WeatherForecast from "./components/WeatherForecast";
import { useWeather } from "./contexts/WeatherProvider";
import InitialPageLoad from "./components/InitialPageLoad";

function App() {
  const { isLoadingCurrentTemperature, isLoadingForecast, userInput } =
    useWeather();

  waveform.register();

  return (
    <Wrapper>
      <LocationSearch />

      {!userInput && <InitialPageLoad />}

      {(isLoadingCurrentTemperature || isLoadingForecast) && (
        <div className="flex-1 w-full flex justify-center items-center">
          <l-waveform color="white" />
        </div>
      )}

      {userInput && !isLoadingCurrentTemperature && !isLoadingForecast && (
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
