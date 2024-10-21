import { weatherCodeDescription } from "../../utils/constants";
import { useWeather } from "../contexts/WeatherProvider";

function CurrentDayOverview() {
  const { forecast, currentWeatherCode } = useWeather();

  let minTemp, maxTemp, AvgTemp, sunrise, sunset;

  if (forecast && forecast.length > 1) {
    ({ minTemp, maxTemp, AvgTemp, sunrise, sunset } = forecast[0]);
  }

  return (
    <div className="bg-white/10 flex flex-col gap-3 border p-2 rounded-lg shadow-md lg:p-4">
      <h2 className="font-semibold text-[14px] md:text-[16px]">TODAYS STATS</h2>
      <div className="flex gap-20  leading-loose">
        <div>
          <p>{weatherCodeDescription[currentWeatherCode]}</p>
          <p>
            H: {maxTemp}&deg; <span className="font-thin">-</span> L: {minTemp}
            &deg;
          </p>
          <p>Avg Temp: {AvgTemp}</p>
        </div>
        <div>
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentDayOverview;
