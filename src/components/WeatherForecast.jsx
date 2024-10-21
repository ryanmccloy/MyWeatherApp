import FutureForecastCards from "./FutureForecastCards";

function WeatherForecast() {
  return (
    <div className="flex flex-col gap-3 z-10 p-2 bg-white/10 border rounded-lg shadow-md lg:flex-1 ">
      <h2 className="font-semibold text-[14px] md:text-[16px]">
        5-DAY FORECAST
      </h2>
      <FutureForecastCards />
    </div>
  );
}

export default WeatherForecast;
