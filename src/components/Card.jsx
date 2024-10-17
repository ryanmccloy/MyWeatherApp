import WeatherIcon from "./WeatherIcon";

function Card({ minTemp, maxTemp, icon }) {
  return (
    <div className="flex flex-col gap-2 items-center min-w-fit p-2 border rounded-lg shadow-md">
      <WeatherIcon icon={icon} />
      <p className="text-[12px] font-semibold">
        {maxTemp}&deg; / {minTemp}&deg;
      </p>
    </div>
  );
}

export default Card;
