import WeatherIcon from "./WeatherIcon";

function Card({ today, minTemp, maxTemp }) {
  return (
    <div
      className={`${
        today ? "border-white" : ""
      } flex flex-col gap-1 items-center min-w-fit p-1 border rounded-lg shadow-md `}
    >
      <WeatherIcon type="rain" />
      <p className="text-[12px] font-semibold">
        {minTemp}&deg; / {maxTemp}&deg;
      </p>
    </div>
  );
}

export default Card;
