import Card from "./Card";
import { useWeather } from "../contexts/WeatherProvider";

function FutureForecastCards() {
  const { forecast } = useWeather();

  return (
    <div className="flex gap-2 overflow-scroll no-scrollbar">
      {forecast.map((day, i) => {
        return (
          <Card
            key={i}
            minTemp={day.minTemp}
            maxTemp={day.maxTemp}
            icon={`${day.weatherCodeMax}0`}
          />
        );
      })}
    </div>
  );
}

export default FutureForecastCards;
