import WeatherIcon from "./WeatherIcon";

function Card({ today, minTemp, maxTemp, icon }) {
  return (
    <div
      className={`${
        today ? "border-white" : ""
      } flex flex-col gap-2 items-center min-w-fit p-2 border rounded-lg shadow-md `}
    >
      <WeatherIcon icon={icon} />
      <p className="text-[12px] font-semibold">
        {minTemp}&deg; / {maxTemp}&deg;
      </p>
    </div>
  );
}

export default Card;
