import WeatherIcon from "./WeatherIcon";
import { useWeather } from "../contexts/WeatherProvider";
import { isDayTime } from "../../utils/helper";

function CurrentDayWeather() {
  const { currentTemperature, currentTime, currentWeatherCode, forecast } =
    useWeather();

  let sunrise, sunset;

  if (forecast && forecast.length > 1) {
    ({ sunrise, sunset } = forecast[0]);
  }

  // Check if it is day or night to render appropraite icon
  const isDay = isDayTime(currentTime, sunrise, sunset);

  const weatherCodeIcon = isDay
    ? `${currentWeatherCode}0large`
    : `${currentWeatherCode}1large`;

  return (
    <div className=" bg-white/10  z-10 p-5 border shadow-md flex-1 rounded-lg flex flex-col justify-between">
      <div className="flex-1 flex justify-center ">
        <WeatherIcon icon={weatherCodeIcon} main={true} />
      </div>
      <h1 className="font-semibold text-[110px] leading-none ">
        {currentTemperature}&deg;
      </h1>
    </div>
  );
}

export default CurrentDayWeather;
