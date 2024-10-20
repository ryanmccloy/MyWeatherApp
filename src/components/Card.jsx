import WeatherIcon from "./WeatherIcon";

function Card({ minTemp, maxTemp, icon }) {
  return (
    <div className="flex flex-col gap-2 items-center min-w-fit p-2 border rounded-lg shadow-md flex-grow lg:flex-row-reverse  lg:flex-1 lg:justify-evenly">
      <WeatherIcon icon={icon} />
      <p className=" font-semibold lg:hidden">
        {maxTemp}&deg; / {minTemp}&deg;
      </p>
      <div className="hidden lg:flex flex-col gap-2">
        <span>H: {maxTemp}&deg;</span>
        <span>L: {minTemp}&deg;</span>
      </div>
    </div>
  );
}

export default Card;
