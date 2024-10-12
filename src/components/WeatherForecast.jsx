import FutureForecastCards from "./FutureForecastCards";
import TodayCard from "./TodayCard";

function WeatherForecast() {
  return (
    <div className="flex gap-3 z-10">
      <TodayCard />
      <FutureForecastCards />
    </div>
  );
}

export default WeatherForecast;
