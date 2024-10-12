import CurrentDayOverview from "./CurrentDayOverview";
import WeatherIcon from "./WeatherIcon";

function CurrentDayWeather() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <WeatherIcon type="rain" />
      <CurrentDayOverview />
    </div>
  );
}

export default CurrentDayWeather;
