import Wrapper from "./components/Wrapper";
import MainContainer from "./components/MainContainer";
import LocationSearch from "./components/LocationSearch";
import CurrentDayWeather from "./components/CurrentDayWeather";
import WeatherForecast from "./components/WeatherForecast";
import IntroMessage from "./components/IntroMessage";
import { useWeather } from "./contexts/WeatherProvider";

function App() {
  const { currentTemperature } = useWeather();

  return (
    <Wrapper>
      {currentTemperature ? (
        <>
          <MainContainer>
            <LocationSearch />
            <CurrentDayWeather />
          </MainContainer>
          <WeatherForecast />
        </>
      ) : (
        <IntroMessage />
      )}
    </Wrapper>
  );
}

export default App;
