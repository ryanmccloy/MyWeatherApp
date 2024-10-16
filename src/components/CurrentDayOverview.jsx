import { useWeather } from "../contexts/WeatherProvider";

function CurrentDayOverview() {
  const { forecast, currentTime, currentWeatherCode } = useWeather();

  let minTemp, maxTemp, AvgTemp, sunrise, sunset, weatherCodeMax;

  if (forecast && forecast.length > 1) {
    ({ minTemp, maxTemp, AvgTemp, sunrise, sunset, weatherCodeMax } =
      forecast[0]);
  }

  return (
    <div className="bg-white/10 flex flex-col gap-3 border p-2 rounded-lg shadow-md">
      <h2 className="font-semibold">TODAYS STATS</h2>
      <div className="flex gap-20 text-[12px] leading-loose">
        <div>
          <p>{currentWeatherCode}</p>
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
