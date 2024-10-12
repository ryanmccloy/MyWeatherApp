import { useWeather } from "../contexts/WeatherProvider";

function CurrentDayOverview() {
  const { currentTemperature } = useWeather();

  return (
    <div className="flex items-end gap-5">
      <h1 className="font-semibold text-[110px] leading-none ">
        {currentTemperature}&deg;
      </h1>

      <div className="flex flex-col gap-1 text-[12px]">
        <p>Showers</p>
        <p>
          H: 31&deg; <span className="font-thin">-</span> L: 14&deg;
        </p>
        <p>Sunset: 7:48pm</p>
      </div>
    </div>
  );
}

export default CurrentDayOverview;
