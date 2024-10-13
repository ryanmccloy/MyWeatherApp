import Card from "./Card";
import { useWeather } from "../contexts/WeatherProvider";

function FutureForecastCards() {
  const { forecast } = useWeather();

  return (
    <div className="flex gap-2 overflow-hidden">
      {forecast.map((day, i) => {
        if (i === 0) {
          return;
        }

        if (i === 1) {
          return (
            <Card
              today={true}
              key={i}
              minTemp={day.minTemp}
              maxTemp={day.maxTemp}
            />
          );
        }

        return <Card key={i} minTemp={day.minTemp} maxTemp={day.maxTemp} />;
      })}
    </div>
  );
}

export default FutureForecastCards;
