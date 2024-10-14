import { useWeather } from "../contexts/WeatherProvider";

function CurrentDayOverview() {
  const { forecast } = useWeather();

  let minTemp, maxTemp, AvgTemp, sunrise, sunset;

  // Check if forecast and forecast[1] exist
  if (forecast && forecast.length > 1) {
    ({ minTemp, maxTemp, AvgTemp, sunrise, sunset } = forecast[1]);
  }

  return (
    <div className="bg-white/10 flex flex-col gap-3 border p-2 rounded-lg shadow-md">
      <h2 className="font-semibold">TODAYS STATS</h2>
      <div className="flex gap-20 text-[12px] leading-loose">
        <div>
          <p>Showers</p>
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
