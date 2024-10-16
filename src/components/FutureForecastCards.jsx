import Card from "./Card";
import { useWeather } from "../contexts/WeatherProvider";

function FutureForecastCards() {
  const { forecast } = useWeather();

  return (
    <div className="flex gap-2 overflow-scroll no-scrollbar">
      {forecast.map((day, i) => {
        if (i === 0) {
          return (
            <Card
              today={true}
              key={i}
              minTemp={day.minTemp}
              maxTemp={day.maxTemp}
              icon={`${day.weatherCodeMax}0`}
            />
          );
        } else {
          return (
            <Card
              key={i}
              minTemp={day.minTemp}
              maxTemp={day.maxTemp}
              icon={`${day.weatherCodeMax}0`}
            />
          );
        }
      })}
    </div>
  );
}

export default FutureForecastCards;
