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

      {!userInput && (
        <div className="flex-1 -mx-5 -mb-5  overflow-hidden">
          <InitialPageLoad />
        </div>
      )}
      {(isLoadingCurrentTemperature || isLoadingForecast) && (
        <div className="flex-1 w-full flex justify-center items-center">
          <l-waveform color="white" />
        </div>
      )}

      {userInput && !isLoadingCurrentTemperature && !isLoadingForecast && (
        <div className="flex flex-col gap-5 flex-1 lg:flex-row max-w-[1500px] w-full mx-auto">
          <CurrentDayWeather />

          <div className="flex flex-col gap-5">
            <CurrentDayOverview />
            <WeatherForecast />
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default App;
