import WeatherIcon from "./WeatherIcon";

function Card({ today }) {
  return (
    <div
      className={`${
        !today ? "border rounded-lg shadow-md" : ""
      } flex flex-col gap-1 items-center min-w-fit p-1 `}
    >
      <WeatherIcon type="rain" />
      <p className="text-[12px] font-semibold">31&deg; / 14&deg;</p>
    </div>
  );
}

export default Card;
