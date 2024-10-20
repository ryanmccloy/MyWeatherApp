import WeatherIcon from "./WeatherIcon";
import { useWeather } from "../contexts/WeatherProvider";
import { isDayTime } from "../../utils/helper";
import { weatherCodeDescription } from "../../utils/constants";

function CurrentDayWeather() {
  const { currentTemperature, currentTime, currentWeatherCode, forecast } =
    useWeather();
  console.log(currentTemperature);

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

      <div className="lg:flex lg:justify-between items-end leading-none ">
        <h1 className="  hidden font-semibold text-[100px] mr-10 lg:block ">
          {weatherCodeDescription[currentWeatherCode]}
        </h1>
        <h1 className="font-semibold text-[110px] md:text-[130px] lg:text-[170px] lg:-mb-3 ">
          {currentTemperature}&deg;
        </h1>
      </div>
    </div>
  );
}

export default CurrentDayWeather;
