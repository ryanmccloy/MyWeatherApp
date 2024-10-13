import FutureForecastCards from "./FutureForecastCards";

function WeatherForecast() {
  return (
    <div className="flex flex-col gap-3 z-10 p-2 bg-white/10 border p-2 rounded-lg shadow-md ">
      <h2 className="font-semibold">5-DAY FORECAST</h2>
      <FutureForecastCards />
    </div>
  );
}

export default WeatherForecast;
