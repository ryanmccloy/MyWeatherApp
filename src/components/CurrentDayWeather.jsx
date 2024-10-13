import WeatherIcon from "./WeatherIcon";
import { useWeather } from "../contexts/WeatherProvider";

function CurrentDayWeather() {
  const { currentTemperature } = useWeather();

  return (
    <div className=" bg-white/10  z-10 p-5 border shadow-md flex-1 rounded-lg flex flex-col justify-between">
      <WeatherIcon type="rain" />
      <h1 className="font-semibold text-[110px] leading-none ">
        {currentTemperature}&deg;
      </h1>
    </div>
  );
}

export default CurrentDayWeather;
